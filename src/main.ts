class Animal {
    public name: string = '';

    constructor(name: string) {
        this.name = name;
    }

    excute(): void {
        // console.log(22);
        console.log('Animal is excuted !')
    }
}

export default Animal;
