class SelectableAndFocusableControl extends Focusable( Selectable( Control ) ) {

    constructor() {
        super();
        console.log('Hi, I am both selectable and focusable');
    }

}