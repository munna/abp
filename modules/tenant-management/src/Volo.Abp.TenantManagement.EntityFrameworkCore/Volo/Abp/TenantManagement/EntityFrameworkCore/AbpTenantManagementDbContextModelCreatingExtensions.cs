using System;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Volo.Abp.TenantManagement.EntityFrameworkCore
{
    public static class AbpTenantManagementDbContextModelCreatingExtensions
    {
        public static void ConfigureTenantManagement(
            this ModelBuilder builder,
            [CanBeNull] Action<AbpTenantManagementModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new AbpTenantManagementModelBuilderConfigurationOptions(
                AbpTenantManagementDbProperties.DbTablePrefix,
                AbpTenantManagementDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.Entity<Tenant>(b =>
            {
                b.ToTable(options.TablePrefix + "Tenants", options.Schema);

                b.ConfigureFullAuditedAggregateRoot();

                b.Property(t => t.Name).IsRequired().HasMaxLength(TenantConsts.MaxNameLength);

                b.HasMany(u => u.ConnectionStrings).WithOne().HasForeignKey(uc => uc.TenantId).IsRequired();

                b.HasIndex(u => u.Name).IsUnique();
            });

            builder.Entity<TenantConnectionString>(b =>
            {
                b.ToTable(options.TablePrefix + "TenantConnectionStrings", options.Schema);

                b.HasKey(x => new { x.TenantId, x.Name });

                b.Property(cs => cs.Name).IsRequired().HasMaxLength(TenantConnectionStringConsts.MaxNameLength);
                b.Property(cs => cs.Value).IsRequired().HasMaxLength(TenantConnectionStringConsts.MaxValueLength);
            });
        }
    }
}