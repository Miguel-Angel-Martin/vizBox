import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AvlOverflowMenuGroup, AvlOverflowMenuItem } from '@avl-controls/core/dist/avl-overflow-menu/avl-overflow-menu.api';
import { User } from '@avl-services/ng-services';

import { CONSTANT_MENU_ITEMS, LOGIN_MENU_ITEM, LOGOUT_MENU_ITEM, UNKNOWN_USER_MENU_ITEM } from '../../app.consts';

@Injectable({
    providedIn: 'root'
})
export class OverflowMenuService {

    constructor(private translateService: TranslateService) {}

    // TRANSLATIONS
    public translateMenu(menu: AvlOverflowMenuGroup[]): AvlOverflowMenuGroup[] {
        return menu.map((group) => this.translateMenuGroup(group));
    }

    public translateMenuGroup(group: AvlOverflowMenuGroup): AvlOverflowMenuGroup {
        return { items: group.items.map((item) => this.translateMenuItem(item)) };
    }

    public translateMenuItem(item: AvlOverflowMenuItem): AvlOverflowMenuItem {
        return {
            ...item,
            label: this.translateService.instant(item.label),
            sublabel: item.sublabel ? this.translateService.instant(item.sublabel) : null,
        };
    }

    public translateDependingOnUser(user: User): (AvlOverflowMenuItem | AvlOverflowMenuGroup)[] {
        let userMenuItem = UNKNOWN_USER_MENU_ITEM;
        if (user) {
            userMenuItem = { ...userMenuItem, label: user.name || user.username };
        }

        const authMenuItem: AvlOverflowMenuItem = user ? LOGOUT_MENU_ITEM : LOGIN_MENU_ITEM;

        return [
            { items: [this.translateMenuItem(userMenuItem)] },
            { items: CONSTANT_MENU_ITEMS.map((item) => this.translateMenuItem(item)) },
            { items: [this.translateMenuItem(authMenuItem)] },
        ];
    }
}
