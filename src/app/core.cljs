(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["react-player" :refer [ReactPlayer]
             ]))


(defn app
  []
  [:div "polyglotv.org"]
   [ r/create-class ReactPlayer])


(defn ^:dev/after-load start
  []
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))
