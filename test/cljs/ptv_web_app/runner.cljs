(ns ptv-web-app.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [ptv-web-app.core-test]))

(doo-tests 'ptv-web-app.core-test)
