(ns ptv-web-app.core
  (:require [cljsjs.material-ui] 
  [cljs-react-material-ui.core :as ui]
  [cljs-react-material-ui.icons :as ic]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(println "This text is printed from src/ptv-web-app/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "polyglotv.org!"}))

(om/root
 (fn [data owner]
   (reify om/IRender
     (render [_]
       (dom/div nil
                (dom/h1 nil (:text data))
                (dom/h3 nil "Initial polyglotv.org aplication")))))
 app-state
 {:target (. js/document (getElementById "app"))})

(defn on-js-reload []
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
