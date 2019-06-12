(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
             ))


(defn app
  []
  [:div "polyglotv.org"]
   [reagent/adapt-react-class react-player])


(defn ^:dev/after-load start
  [ ]
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))
