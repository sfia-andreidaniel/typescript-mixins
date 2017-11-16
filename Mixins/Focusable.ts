function Focusable<T extends Constructor<{}>>(Base: T) {

    return class extends Base {

        constructor(...args: any[]) {
            super(...args);
        }

        focus() {
            console.log('focus...');
        }

    }
}