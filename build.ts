///<reference path="interfaces.ts" />

///<reference path="Mixins/Focusable.ts" />
///<reference path="Mixins/Selectable.ts" />
///<reference path="BaseClasses/Control.ts" />
///<reference path="Contracts/FocusableControl.ts" />
///<reference path="Contracts/SelectableAndFocusableControl.ts" />

let sc = new SelectableAndFocusableControl();

sc.focus();
sc.select();
