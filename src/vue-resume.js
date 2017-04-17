import visibility from 'visibilityjs/lib/visibility.core';
import isFunction from 'lodash/isFunction';

export default {
    created() {
        const resumeFuntion = this.$options.resume;
        this.$$resumeActive = true;
        if (resumeFuntion && isFunction(resumeFuntion)) {
            this.$$resume = visibility.change(() => {
                if (!visibility.hidden() && this.$$resumeActive) {
                    resumeFuntion.call(this);
                }
            });
        }
    },
    activated() {
        this.$$resumeActive = true;
    },
    deactivated() {
        this.$$resumeActive = false;
    },
    beforeDestroy() {
        this.$$resumeActive = false;
        if('$$resume' in this) {
            visibility.unbind(this.$$resume);
        }
    }
}
