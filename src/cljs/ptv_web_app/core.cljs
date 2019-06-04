(ns ptv-web-app.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [ptv-web-app.events :as events]
   [ptv-web-app.routes :as routes]
   [ptv-web-app.views :as views]
   [ptv-web-app.config :as config]
   ))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
