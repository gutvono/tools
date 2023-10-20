export class HeaderComponent {
    constructor() {}

    menu_icon_variable: boolean = false;
    menuVariable: boolean = false;

    openMenu() {
        this.menuVariable = !this.menuVariable;
        this.menu_icon_variable = !this.menu_icon_variable;
    }
}
