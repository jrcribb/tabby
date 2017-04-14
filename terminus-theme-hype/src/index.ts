import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'terminus-core'


@Injectable()
class HypeTheme extends Theme {
    name = 'Hype'
    css = require('./theme.scss')
    terminalBackground = '#1D272D'
}


@NgModule({
    providers: [
        { provide: Theme, useClass: HypeTheme, multi: true },
    ],
})
export default class HypeThemeModule { }
