function Selectable<T extends Constructor<{}>>(Base: T) {

    return class extends Base {

        constructor(...args: any[]) {
            super(...args);
        }

        select() {
            console.log('select...');
        }

    }
}