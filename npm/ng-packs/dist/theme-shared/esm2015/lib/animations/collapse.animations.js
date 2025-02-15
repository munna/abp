/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, trigger, state, style, transition, useAnimation } from '@angular/animations';
/** @type {?} */
export const collapseY = animation(
  [
    style({ height: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '0', padding: '0px' })),
  ],
  { params: { time: '350ms', easing: 'ease' } },
);
/** @type {?} */
export const collapseX = animation(
  [
    style({ width: '*', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '0', padding: '0px' })),
  ],
  { params: { time: '350ms', easing: 'ease' } },
);
/** @type {?} */
export const expandY = animation(
  [
    style({ height: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ height: '*', padding: '*' })),
  ],
  { params: { time: '350ms', easing: 'ease' } },
);
/** @type {?} */
export const expandX = animation(
  [
    style({ width: '0', overflow: 'hidden', 'box-sizing': 'border-box' }),
    animate('{{ time }} {{ easing }}', style({ width: '*', padding: '*' })),
  ],
  { params: { time: '350ms', easing: 'ease' } },
);
/** @type {?} */
export const collapse = trigger('collapse', [
  state('collapsed', style({ height: '0', overflow: 'hidden' })),
  state('expanded', style({ height: '*', overflow: 'hidden' })),
  transition('expanded => collapsed', useAnimation(collapseY)),
  transition('collapsed => expanded', useAnimation(expandY)),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2FuaW1hdGlvbnMvY29sbGFwc2UuYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUUxRyxNQUFNLE9BQU8sU0FBUyxHQUFHLFNBQVMsQ0FDaEM7SUFDRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3RFLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0NBQzNFLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUM5Qzs7QUFFRCxNQUFNLE9BQU8sU0FBUyxHQUFHLFNBQVMsQ0FDaEM7SUFDRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3JFLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0NBQzFFLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUM5Qzs7QUFFRCxNQUFNLE9BQU8sT0FBTyxHQUFHLFNBQVMsQ0FDOUI7SUFDRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3RFLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3pFLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUM5Qzs7QUFFRCxNQUFNLE9BQU8sT0FBTyxHQUFHLFNBQVMsQ0FDOUI7SUFDRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ3JFLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ3hFLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUM5Qzs7QUFFRCxNQUFNLE9BQU8sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDMUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzlELEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM3RCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVELFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDM0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIGFuaW1hdGlvbiwgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB1c2VBbmltYXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGNvbGxhcHNlWSA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG92ZXJmbG93OiAnaGlkZGVuJywgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IGhlaWdodDogJzAnLCBwYWRkaW5nOiAnMHB4JyB9KSlcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScgfSB9XG4pO1xuXG5leHBvcnQgY29uc3QgY29sbGFwc2VYID0gYW5pbWF0aW9uKFxuICBbXG4gICAgc3R5bGUoeyB3aWR0aDogJyonLCBvdmVyZmxvdzogJ2hpZGRlbicsICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnIH0pLFxuICAgIGFuaW1hdGUoJ3t7IHRpbWUgfX0ge3sgZWFzaW5nIH19Jywgc3R5bGUoeyB3aWR0aDogJzAnLCBwYWRkaW5nOiAnMHB4JyB9KSlcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScgfSB9XG4pO1xuXG5leHBvcnQgY29uc3QgZXhwYW5kWSA9IGFuaW1hdGlvbihcbiAgW1xuICAgIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG92ZXJmbG93OiAnaGlkZGVuJywgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IGhlaWdodDogJyonLCBwYWRkaW5nOiAnKicgfSkpXG4gIF0sXG4gIHsgcGFyYW1zOiB7IHRpbWU6ICczNTBtcycsIGVhc2luZzogJ2Vhc2UnIH0gfVxuKTtcblxuZXhwb3J0IGNvbnN0IGV4cGFuZFggPSBhbmltYXRpb24oXG4gIFtcbiAgICBzdHlsZSh7IHdpZHRoOiAnMCcsIG92ZXJmbG93OiAnaGlkZGVuJywgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcgfSksXG4gICAgYW5pbWF0ZSgne3sgdGltZSB9fSB7eyBlYXNpbmcgfX0nLCBzdHlsZSh7IHdpZHRoOiAnKicsIHBhZGRpbmc6ICcqJyB9KSlcbiAgXSxcbiAgeyBwYXJhbXM6IHsgdGltZTogJzM1MG1zJywgZWFzaW5nOiAnZWFzZScgfSB9XG4pO1xuXG5leHBvcnQgY29uc3QgY29sbGFwc2UgPSB0cmlnZ2VyKCdjb2xsYXBzZScsIFtcbiAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSksXG4gIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSksXG4gIHRyYW5zaXRpb24oJ2V4cGFuZGVkID0+IGNvbGxhcHNlZCcsIHVzZUFuaW1hdGlvbihjb2xsYXBzZVkpKSxcbiAgdHJhbnNpdGlvbignY29sbGFwc2VkID0+IGV4cGFuZGVkJywgdXNlQW5pbWF0aW9uKGV4cGFuZFkpKVxuXSk7XG4iXX0=
