import { ABP } from '@abp/ng.core';
import { ConfirmationService, Toaster } from '@abp/ng.theme.shared';
import { Component, TemplateRef, TrackByFunction, ViewChild, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { finalize, pluck, switchMap, take } from 'rxjs/operators';
import snq from 'snq';
import {
  CreateUser,
  DeleteUser,
  GetUserById,
  GetUserRoles,
  GetUsers,
  UpdateUser,
  GetRoles,
} from '../../actions/identity.actions';
import { Identity } from '../../models/identity';
import { IdentityState } from '../../states/identity.state';
@Component({
  selector: 'abp-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  @Select(IdentityState.getUsers)
  data$: Observable<Identity.UserItem[]>;

  @Select(IdentityState.getUsersTotalCount)
  totalCount$: Observable<number>;

  @ViewChild('modalContent', { static: false })
  modalContent: TemplateRef<any>;

  form: FormGroup;

  selected: Identity.UserItem;

  selectedUserRoles: Identity.RoleItem[];

  roles: Identity.RoleItem[];

  visiblePermissions = false;

  providerKey: string;

  pageQuery: ABP.PageQueryParams = {};

  isModalVisible: boolean;

  loading = false;

  modalBusy = false;

  sortOrder = '';

  sortKey = '';

  trackByFn: TrackByFunction<AbstractControl> = (index, item) => Object.keys(item)[0] || index;

  get roleGroups(): FormGroup[] {
    return snq(() => (this.form.get('roleNames') as FormArray).controls as FormGroup[], []);
  }

  constructor(private confirmationService: ConfirmationService, private fb: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.get();
  }

  onSearch(value) {
    this.pageQuery.filter = value;
    this.get();
  }

  buildForm() {
    this.store.dispatch(new GetRoles()).subscribe(() => {
      this.roles = this.store.selectSnapshot(IdentityState.getRoles);
      this.form = this.fb.group({
        userName: [this.selected.userName || '', [Validators.required, Validators.maxLength(256)]],
        email: [this.selected.email || '', [Validators.required, Validators.email, Validators.maxLength(256)]],
        name: [this.selected.name || '', [Validators.maxLength(64)]],
        surname: [this.selected.surname || '', [Validators.maxLength(64)]],
        phoneNumber: [this.selected.phoneNumber || '', [Validators.maxLength(16)]],
        lockoutEnabled: [this.selected.twoFactorEnabled || (this.selected.id ? false : true)],
        twoFactorEnabled: [this.selected.twoFactorEnabled || (this.selected.id ? false : true)],
        roleNames: this.fb.array(
          this.roles.map(role =>
            this.fb.group({
              [role.name]: [!!snq(() => this.selectedUserRoles.find(userRole => userRole.id === role.id))],
            }),
          ),
        ),
      });

      if (!this.selected.userName) {
        this.form.addControl('password', new FormControl('', [Validators.required, Validators.maxLength(32)]));
      }
    });
  }

  openModal() {
    this.buildForm();
    this.isModalVisible = true;
  }

  onAdd() {
    this.selected = {} as Identity.UserItem;
    this.selectedUserRoles = [] as Identity.RoleItem[];
    this.openModal();
  }

  onEdit(id: string) {
    this.store
      .dispatch(new GetUserById(id))
      .pipe(
        switchMap(() => this.store.dispatch(new GetUserRoles(id))),
        pluck('IdentityState'),
        take(1),
      )
      .subscribe((state: Identity.State) => {
        this.selected = state.selectedUser;
        this.selectedUserRoles = state.selectedUserRoles;
        this.openModal();
      });
  }

  save() {
    if (!this.form.valid) return;
    this.modalBusy = true;

    const { roleNames } = this.form.value;
    const mappedRoleNames = snq(
      () => roleNames.filter(role => !!role[Object.keys(role)[0]]).map(role => Object.keys(role)[0]),
      [],
    );

    this.store
      .dispatch(
        this.selected.id
          ? new UpdateUser({
              ...this.form.value,
              id: this.selected.id,
              roleNames: mappedRoleNames,
            })
          : new CreateUser({
              ...this.form.value,
              roleNames: mappedRoleNames,
            }),
      )
      .subscribe(() => {
        this.modalBusy = false;
        this.isModalVisible = false;
      });
  }

  delete(id: string, userName: string) {
    this.confirmationService
      .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
        messageLocalizationParams: [userName],
      })
      .subscribe((status: Toaster.Status) => {
        if (status === Toaster.Status.confirm) {
          this.store.dispatch(new DeleteUser(id));
        }
      });
  }

  onPageChange(data) {
    this.pageQuery.skipCount = data.first;
    this.pageQuery.maxResultCount = data.rows;

    this.get();
  }

  get() {
    this.loading = true;
    this.store
      .dispatch(new GetUsers(this.pageQuery))
      .pipe(finalize(() => (this.loading = false)))
      .subscribe();
  }
}
