/**
 * This is a fake index.ts file, for auto-generating the types of all the inline required components.
 * The real index file that will be bundled is "src/index.js".
 * Please use this file for declaring all the exports, so they could be picked up by typescript's complier
 */
export * from './style';
export * from './services';
export * as Incubator from './incubator';
export {asBaseComponent, withScrollEnabler, withScrollReached, WithScrollEnablerProps, WithScrollReachedProps} from './commons/new';
export {default as Avatar, AvatarPropTypes} from './components/avatar';
export {default as Card, CardPropTypes, CardSectionProps} from './components/card';
export {default as View, ViewPropTypes} from './components/view';
export {default as Text, TextPropTypes} from './components/text';
export {default as TouchableOpacity, TouchableOpacityProps} from './components/touchableOpacity';
export {default as Button, ButtonPropTypes} from './components/button';
export {default as Checkbox, CheckboxPropTypes} from './components/checkbox';
export {default as FloatingButton, FloatingButtonProps} from './components/floatingButton';
export {default as Image, ImageProps} from './components/image';
export {default as Overlay, OverlayTypes} from './components/overlay';
export {default as RadioButton, RadioButtonPropTypes} from './components/radioButton/RadioButton';
export {default as RadioGroup, RadioGroupPropTypes} from './components/radioButton/RadioGroup';
export {default as TabBar} from './components/TabBar';
export {default as Fader, FaderProps, FaderPosition} from './components/fader';
export {default as ExpandableSection, ExpandableSectionProps } from './components/ExpandableSection';
export {default as Modal, ModalProps, ModalTopBarProps} from './components/modal';
export {default as PanGestureView, PanGestureViewProps} from './components/panningViews/panGestureView';
export {default as PanningContext} from './components/panningViews/panningContext';
export {default as asPanViewConsumer} from './components/panningViews/asPanViewConsumer';
export {
  default as PanningProvider,
  PanningDirections,
  PanLocationProps,
  PanAmountsProps,
  PanDirectionsProps,
  PanningProviderDirection
} from './components/panningViews/panningProvider';
export {default as PanListenerView, PanListenerViewPropTypes} from './components/panningViews/panListenerView';
export {default as PanResponderView, PanResponderViewPropTypes} from './components/panningViews/panResponderView';
export {default as PanDismissibleView, PanDismissibleViewPropTypes, DismissibleAnimationPropTypes} from './components/panningViews/panDismissibleView';

/* All components with manual typings */
export {
  ActionBar,
  ActionSheet,
  Badge,
  BadgeProps,
  Card,
  Carousel,
  ConnectionStatusBar,
  Dialog,
  Drawer,
  ExpandableSection,
  FeatureHighlight,
  Hint,
  BaseInput,
  TextArea,
  MaskedInput,
  ListItem,
  PageControl,
  ProgressBar,
  Slider,
  GradientSlider,
  ColorSliderGroup,
  Stepper,
  TagsInput,
  ChipsInput,
  SharedTransition,
  StackAggregator,
  Toast,
  WheelPickerDialog,
  Assets,
  BaseComponent,
  PureBaseComponent,
  UIComponent,
  forwardRef,
  AvatarHelper,
  Constants,
  LogService,
  LoaderScreen,
  StateScreen,
  WheelPicker,
  WheelPickerProps,
  ColorPicker,
  Picker,
  PickerProps
} from '../typings';

/* All components that are missing either manual or auto generated typings */
export const AnimatedImage;
export const AnimatedScanner;
export const ColorPalette;
export const ColorSwatch;
export const DateTimePicker;
export const HighlighterOverlayView;
export const Keyboard;
export const KeyboardAwareListView;
export const KeyboardAwareScrollView;
export const SafeAreaInsetsManager;
export const SafeAreaSpacerView;
export const ScrollBar;
export const SelectableComponent;
export const Switch;
export const TabController;
export const TextField;
export const Wizard;
