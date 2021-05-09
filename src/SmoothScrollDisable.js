
import Scrollbar from "smooth-scrollbar";

class DisablePlugin extends Scrollbar.ScrollbarPlugin {
    transformDelta(delta, fromEvent) {
        return this.options.disable ? {x: 0, y: 0} : delta;
    }
}

DisablePlugin.pluginName = 'Disable';
DisablePlugin.defaultOptions = {
    disable: false
};

export default DisablePlugin;
