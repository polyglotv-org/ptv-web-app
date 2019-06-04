(ns ptv-web-app.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.core :as re-com]
   [ptv-web-app.subs :as subs]
   ))

;; home

(defn home-title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label (str "Home Page.")
     :level :level1]))

(defn link-to-about-page []
  [re-com/hyperlink-href
   :label "About Page"
   :href "#/about"])

(defn lesson-title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label (str "Lesson Page.")
     :level :level1]))

(defn link-to-lesson-page []
  [re-com/hyperlink-href
   :label "go to lesson lesson"
   :href "#/lesson"])

(defn link-to-home-page []
  [re-com/hyperlink-href
   :label "go to Home Page"
   :href "#/"])



(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[home-title]
              [link-to-about-page ][link-to-lesson-page]
              ]])


;; lesson panel


(defn lesson-panel []
  [re-com/v-box
   :gap "1em"
   :children [[lesson-title]
              [link-to-about-page] [link-to-home-page]]])

;; about

(defn about-title []
  [re-com/title
   :label "About Page."
   :level :level1])

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[about-title]
              [link-to-home-page] [link-to-lesson-page]]])


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    :lesson-panel [lesson-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :height "100%"
     :children [[panels @active-panel]]]))
