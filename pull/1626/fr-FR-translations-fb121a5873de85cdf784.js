(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[11971],{74976:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.messages=a.locale=a.areTranslationsLoaded=void 0;var t,i=r(25387),n=r(54206),o=(t=n)&&t.__esModule?t:{default:t};(0,i.addLocaleData)(o.default);a.areTranslationsLoaded=!0,a.locale="fr-FR",a.messages={"Terra.AbstractModal.BeginModalDialog":"Commencer le dialogue modal","Terra.AbstractModal.EndModalDialog":"Terminer le dialogue modal","Terra.actionHeader.back":"Retour","Terra.actionHeader.close":"Fermer","Terra.actionHeader.close.description":"Sélectionnez le bouton pour fermer {text}.","Terra.actionHeader.maximize":"Agrandir","Terra.actionHeader.maximize.description":"Sélectionnez le bouton pour agrandir {text}.","Terra.actionHeader.minimize":"Réduire","Terra.actionHeader.minimize.description":"Sélectionnez le bouton pour réduire {text}.","Terra.actionHeader.next":"Suivant","Terra.actionHeader.previous":"Précédent","Terra.ajax.error":"Échec du chargement du contenu.","Terra.application.tabs.more":"Plus","Terra.application.tabs.moreButtonDescription":"Liens de navigation supplémentaires","Terra.application.tabs.moreMenuHeaderTitle":"Liens de navigation supplémentaires","Terra.application.utility.back":"Retour","Terra.application.utility.button":"Options utilisateur","Terra.application.utility.close":"Fermer","Terra.application.utility.menu":"Menu Utilitaire","Terra.ApplicationHeaderLayout.SkipToContent":"Accéder au contenu","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Menu","Terra.applicationLayout.utilityDefaults.about":"À propos de","Terra.applicationLayout.utilityDefaults.appearance":"Apparence","Terra.applicationLayout.utilityDefaults.changePhoto":"Changer de photo","Terra.applicationLayout.utilityDefaults.gettingStarted":"Premiers pas","Terra.applicationLayout.utilityDefaults.help":"Aide","Terra.applicationLayout.utilityDefaults.logOut":"Déconnexion","Terra.applicationLayout.utilityDefaults.menu":"Menu","Terra.applicationLayout.utilityDefaults.security":"Sécurité","Terra.applicationLayout.utilityDefaults.settings":"Paramètres","Terra.applicationLayout.utilityDefaults.termsOfUse":"Conditions d'utilisation","Terra.applicationLayout.utilityDefaults.userInformation":"Informations sur l'utilisateur","Terra.applicationNavigation.drawerMenu.navigation":"Éléments de navigation","Terra.applicationNavigation.drawerMenu.utilities":"Éléments de l'utilitaire","Terra.applicationNavigation.extensions.rollupButtonDescription":"Additional Tools","Terra.applicationNavigation.extensions.rollupMenuHeaderTitle":"Additional Tools","Terra.applicationNavigation.header.menuButtonTitle":"Menu","Terra.applicationNavigation.header.skipToContentTitle":"Accéder au contenu","Terra.applicationNavigation.header.utilityButtonTitleNoUser":"Options","Terra.applicationNavigation.header.utilityButtonTitleUser":"Paramètres utilisateur pour : {currentUserName}","Terra.applicationNavigation.notifications.new":"Nouveau","Terra.applicationNavigation.tabs.rollupButtonDescription":"Liens de navigation supplémentaires","Terra.applicationNavigation.tabs.rollupButtonTitle":"Plus","Terra.applicationNavigation.tabs.rollupMenuHeaderTitle":"Liens de navigation supplémentaires","Terra.applicationNavigation.utilityMenu.headerTitle":"Utilitaires","Terra.applicationNavigation.utilityMenu.help":"Aide","Terra.applicationNavigation.utilityMenu.logout":"Déconnexion","Terra.applicationNavigation.utilityMenu.settings":"Paramètres","Terra.avatar.deceased":"Décédé(e)","Terra.collapsibleMenuView.more":"Plus","Terra.date.input.april":"Avril","Terra.date.input.august":"Août","Terra.date.input.dayDescription":"Un nombre à deux chiffres","Terra.date.input.dayInputLabel":"Jour","Terra.date.input.dayInputLabelWithDefaultName":"Jour calendaire de la date","Terra.date.input.dayInputLabelWithName":"Jour – {a11yLabel}","Terra.date.input.december":"Décembre","Terra.date.input.february":"Février","Terra.date.input.formatDayMonthYear":"(JJ Mois AAAA)","Terra.date.input.formatMonthDayYear":"(Mois JJ AAAA)","Terra.date.input.january":"Janvier","Terra.date.input.july":"Juillet","Terra.date.input.june":"Juin","Terra.date.input.labelDefault":"Date","Terra.date.input.march":"Mars","Terra.date.input.may":"Mai","Terra.date.input.monthPlaceholder":"– Sélectionner –","Terra.date.input.monthSelectLabel":"Mois","Terra.date.input.monthSelectLabelWithDefaultName":"Mois de la date","Terra.date.input.monthSelectLabelWithName":"Mois – {a11yLabel}","Terra.date.input.november":"Novembre","Terra.date.input.october":"Octobre","Terra.date.input.optional":"(facultatif)","Terra.date.input.required":"Obligatoire","Terra.date.input.september":"Septembre","Terra.date.input.yearDescription":"Un nombre à quatre chiffres","Terra.date.input.yearLabel":"Année","Terra.datePicker.calendarInstructions":"Pour modifier la sélection, utilisez les touches fléchées. Appuyez sur la touche Entrée pour sélectionner une date. Appuyez sur la touche Échap pour fermer la fenêtre contextuelle du sélecteur de dates.","Terra.datePicker.closeCalendar":"Fermer","Terra.datePicker.date":"Date","Terra.datePicker.dateFormat":"JJ/MM/AAAA","Terra.datePicker.dateFormatLabel":"Format de date:","Terra.datePicker.dayLabel":"Journée","Terra.datePicker.disabled":"Désactivé","Terra.datePicker.monthLabel":"Mois","Terra.datePicker.nextMonth":"Mois suivant","Terra.datePicker.openCalendar":"Ouvrir le calendrier","Terra.datePicker.previousMonth":"Mois précédent","Terra.datePicker.today":"Aujourd'hui","Terra.datePicker.yearLabel":"Année","Terra.dateTimePicker.timeClarification.button.daylightSaving":"Avant (heure d'été)","Terra.dateTimePicker.timeClarification.button.standardTime":"Après (heure d'hiver)","Terra.dateTimePicker.timeClarification.message":"L'heure sélectionnée se situe lors du passage de l'heure d'été à l'heure d'hiver. Voulez-vous documenter cette valeur avant ou après le passage de l'heure d'été à l'heure d'hiver ?","Terra.dateTimePicker.timeClarification.title":"Clarification de l'heure","Terra.form.field.optional":"(facultatif)","Terra.form.field.required":"Requis","Terra.form.select.activeOption":"{text} ({index} sur {totalOptions}).","Terra.form.select.add":'Ajouter "{text}"',"Terra.form.select.ariaLabel":"Rechercher","Terra.form.select.clearSelect":"Effacer la sélection","Terra.form.select.defaultDisplay":"Sélectionner","Terra.form.select.defaultUsageGuidance":"Utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.","Terra.form.select.dimmed":"Grisé.","Terra.form.select.disabled":"Désactivé.","Terra.form.select.listOfTotalOptions":"Liste de options.","Terra.form.select.maxSelectionHelp":"Limite de {text} éléments","Terra.form.select.maxSelectionOption":"{text} éléments maximum sélectionnés","Terra.form.select.menu":"Menu","Terra.form.select.mobileButtonUsageGuidance":"Appuyez pour naviguer vers les options.","Terra.form.select.mobileUsageGuidance":"Balayez vers la droite pour naviguer vers les options.","Terra.form.select.multiSelectUsageGuidance":"Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner ou désélectionner une option.","Terra.form.select.noResults":'Aucun résultat correspondant pour "{text}"',"Terra.form.select.optGroup":"Groupe {text}","Terra.form.select.option":"Options","Terra.form.select.searchUsageGuidance":"Saisissez du texte ou utilisez les touches fléchées haut et bas pour parcourir les options. Appuyez sur Entrée pour sélectionner une option.","Terra.form.select.selectCleared":"Valeur sélectionnée effacée.","Terra.form.select.selected":"Sélectionné.","Terra.form.select.selectedText":"{text} sélectionné. ({index} sur {totalOptions}).","Terra.form.select.unselected":"Désélectionné.","Terra.form.select.unselectedText":"{text} désélectionné.","Terra.icon.IconConsultInstructionsForUse.title":"Icône Instructions électroniques pour l'utilisation","Terra.InfiniteList.loading":"Chargement...","Terra.list.multiSelect":"Liste de sélections multiples. Pour sélectionner ou désélectionner des éléments, appuyez sur Entrée ou sur la barre d'espace.","Terra.list.singleSelect":"Liste de sélection unique. Pour sélectionner ou désélectionner des éléments, appuyez sur Entrée ou sur la barre d'espace.","Terra.menu.back":"Retour","Terra.menu.close":"Fermer","Terra.menu.exitSubmenu":"Pour quitter le sous-menu, appuyez sur la flèche Gauche ou sélectionnez le bouton Précédent.","Terra.menu.index":"({index} sur {totalItems})","Terra.menu.itemWithSubmenu":"avec des éléments de sous-menu","Terra.menu.selected":"sélectionné","Terra.menu.unselected":"non sélectionné","Terra.navigation.side.menu.selected":"Sélectionné","Terra.notification.dialog.error":"Erreur","Terra.notification.dialog.hazard-high":"Alerte","Terra.notification.dialog.hazard-low":"Information","Terra.notification.dialog.hazard-medium":"Avertissement","Terra.Overlay.loading":"Chargement...","Terra.pills.hint.pillList":"Contient {numberOfPills} éléments","Terra.pills.hint.removable":"Vous pouvez supprimer cet élément avec la touche Supprimer ou Retour arrière","Terra.pills.hint.rollupNotVisible":"{pillsNotVisibleCount} éléments ne sont pas affichés","Terra.pills.hint.rollupPill":"{pillsNotVisibleCount} éléments sont masqués. Sélectionnez pour afficher {pillsNotVisibleCount} éléments masqués","Terra.pills.hint.rollupVisible":"{pillsNotVisibleCount} éléments masqués sont désormais affichés","Terra.pills.hint.selectable":"Pour plus d'informations, vous pouvez sélectionner le bouton avec la barre d'espace ou la touche Entrée","Terra.pills.hint.selectableAndRemovable":"Vous pouvez supprimer cet élément avec la touche Suppression ou Retour arrière. Pour plus d'informations, vous pouvez sélectionner le bouton avec la barre d'espace ou la touche Entrée","Terra.pills.hint.showLess":"Sélectionnez pour masquer les éléments","Terra.pills.hint.wasRemoved":"{pillLabelName} supprimé","Terra.pills.label.delete":"Supprimer {pillLabelName}","Terra.pills.label.rollupPill":"{pillsNotVisibleCount} de plus...","Terra.pills.label.showLess":"Réduire","Terra.popup.header.close":"Fermer","Terra.searchField.clear":"Effacer","Terra.searchField.search":"Rechercher","Terra.searchField.submit-search":"Soumettre la recherche","Terra.status-view.error":"Erreur","Terra.status-view.no-data":"Aucun résultat","Terra.status-view.no-matching-results":"Aucun résultat correspondant","Terra.status-view.not-authorized":"Non autorisé","Terra.tabs.hint.hiddenTabs":"{hiddenTabs} éléments ne sont pas affichés","Terra.tabs.hint.tabList":"Contient {numberOfTabs} éléments","Terra.tabs.hint.tabMenu":"{hiddenTabs} éléments sont masqués. Sélectionnez pour afficher {hiddenTabs} éléments masqués","Terra.tabs.more":"Plus","Terra.timeInput.a11yLabelDefault":"Heure","Terra.timeInput.am":"matin","Terra.timeInput.descriptionMinute":"Minute à deux chiffres.","Terra.timeInput.descriptionSecond":"Seconde à deux chiffres.","Terra.timeInput.hourDescriptionTwelve":"Valeur de 12 heures à deux chiffres.","Terra.timeInput.hourDescriptionTwentyFour":"Valeur de 24 heures à deux chiffres.","Terra.timeInput.hourLabel":"{a11yLabel} heure","Terra.timeInput.hours":"Heures","Terra.timeInput.labeledTextValue":"{a11yLabel} {a11yTimeValue}","Terra.timeInput.maskHourMinute":"(hh:mm)","Terra.timeInput.maskHourMinuteSecond":"(hh:mm:ss)","Terra.timeInput.minutes":"Minutes","Terra.timeInput.pm":"après-midi","Terra.timeInput.seconds":"Secondes","Terra.timeInput.textValueTwelveHourMinute":"{hour}:{minute} {meridiem}","Terra.timeInput.textValueTwelveHourMinuteSecond":"{hour}:{minute}:{second} {meridiem}","Terra.timeInput.textValueTwentyFourHourMinute":"{hour}:{minute}","Terra.timeInput.textValueTwentyFourHourMinuteSecond":"{hour}:{minute}:{second}","Terra.timeInput.timeFormatLabel":"Format d'heure:","Terra.timeInput.timeSpacer":":","terraApplication.actionMenu.headerCloseButtonLabel":"Fermer","terraApplication.errorBoundary.defaultErrorMessage":"Le système a rencontré une erreur : {errorDetails}","terraApplication.navigation.drawerMenu.navigation":"Éléments de navigation","terraApplication.navigation.drawerMenu.utilities":"Éléments de l'utilitaire","terraApplication.navigation.extensions.rollupButtonDescription":"Outils supplémentaires","terraApplication.navigation.extensions.rollupMenuHeaderTitle":"Outils supplémentaires","terraApplication.navigation.header.menuButtonTitle":"Menu","terraApplication.navigation.header.skipToContentTitle":"Accéder au contenu","terraApplication.navigation.header.utilityButtonTitleNoUser":"Options","terraApplication.navigation.header.utilityButtonTitleUser":"Paramètres utilisateur pour : {currentUserName}","terraApplication.navigation.notifications.new":"Nouveau","terraApplication.navigation.tabs.rollupButtonDescription":"Liens de navigation supplémentaires","terraApplication.navigation.tabs.rollupButtonTitle":"Plus","terraApplication.navigation.tabs.rollupMenuHeaderTitle":"Liens de navigation supplémentaires","terraApplication.navigation.utilityMenu.headerTitle":"Utilitaires","terraApplication.navigation.utilityMenu.help":"Aide","terraApplication.navigation.utilityMenu.logout":"Déconnexion","terraApplication.navigation.utilityMenu.settings":"Paramètres","terraApplication.notificationBanner.advisory":"Recommandation.","terraApplication.notificationBanner.alert":"Alerte.","terraApplication.notificationBanner.dismiss":"Ignorer","terraApplication.notificationBanner.error":"Erreur.","terraApplication.notificationBanner.info":"Informations.","terraApplication.notificationBanner.success":"Réussite.","terraApplication.notificationBanner.unsatisfied":"Action requise.","terraApplication.notificationBanner.unverified":"Dossiers extérieurs.","terraApplication.notificationBanner.warning":"Avertissement.","terraApplication.notifications.newNotificationLabel":"Nouvelle notification {label}. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.","terraApplication.notifications.regionLabel":"Notifications {label}.","terraApplication.notifications.removedNotificationLabel":"Notification {label} supprimée. {bannerType} {bannerDescription}.","terraApplication.notifications.totalCountLabel":"Total des notifications {label} : {count}","terraApplication.statusLayout.error":"Erreur","terraApplication.statusLayout.no-data":"Aucun résultat","terraApplication.statusLayout.no-matching-results":"Aucun résultat correspondant","terraApplication.statusLayout.not-authorized":"Non autorisé","terraApplication.unsavedChangesPrompt.acceptButtonText":"Ne pas enregistrer","terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro":"Des modifications apportées aux éléments suivants n'ont pas été enregistrées :","terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro":"Si vous n'enregistrez pas les modifications, elles seront perdues. Comment voulez-vous procéder ?","terraApplication.unsavedChangesPrompt.rejectButtonText":"Continuer la modification","terraApplication.unsavedChangesPrompt.singlePromptMessage":"Des modifications apportées au composant {promptDescription} n'ont pas été enregistrées.","terraApplication.unsavedChangesPrompt.title":"Modifications non enregistrées","terraApplication.workspace.activityOverlay.loading":"Chargement...","terraApplication.workspace.hideWorkspaceLabel":"Masquer l'espace de travail","terraApplication.workspace.showWorkspaceLabel":"Afficher l'espace de travail","terraApplication.workspace.skipToLabel":"Accéder à l'espace de travail","terraApplication.workspace.workspaceLabel":"l'espace de travail","terraApplication.workspace.workspaceSettingsLabel":"Paramètres de l'espace de travail","terraDevSite.pageActivityOverlayContainer.loading":"Chargement...","terraDevSite.pageHeader.actionsMenu":"{label} Actions","terraDevSite.pageHeader.back":"Retour","terraDevSite.pageHeader.moreActions":"More Actions"}},54206:function(e){e.exports=function(){"use strict";return[{locale:"fr",pluralRuleFunction:function(e,a){return a?1==e?"one":"other":e>=0&&e<2?"one":"other"},fields:{year:{displayName:"année",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"dans {0} an",other:"dans {0} ans"},past:{one:"il y a {0} an",other:"il y a {0} ans"}}},"year-short":{displayName:"an",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"dans {0} a",other:"dans {0} a"},past:{one:"il y a {0} a",other:"il y a {0} a"}}},month:{displayName:"mois",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} mois",other:"dans {0} mois"},past:{one:"il y a {0} mois",other:"il y a {0} mois"}}},"month-short":{displayName:"m.",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} m.",other:"dans {0} m."},past:{one:"il y a {0} m.",other:"il y a {0} m."}}},day:{displayName:"jour",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} jour",other:"dans {0} jours"},past:{one:"il y a {0} jour",other:"il y a {0} jours"}}},"day-short":{displayName:"j",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} j",other:"dans {0} j"},past:{one:"il y a {0} j",other:"il y a {0} j"}}},hour:{displayName:"heure",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} heure",other:"dans {0} heures"},past:{one:"il y a {0} heure",other:"il y a {0} heures"}}},"hour-short":{displayName:"h",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} h",other:"dans {0} h"},past:{one:"il y a {0} h",other:"il y a {0} h"}}},minute:{displayName:"minute",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} minute",other:"dans {0} minutes"},past:{one:"il y a {0} minute",other:"il y a {0} minutes"}}},"minute-short":{displayName:"min",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} min",other:"dans {0} min"},past:{one:"il y a {0} min",other:"il y a {0} min"}}},second:{displayName:"seconde",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} seconde",other:"dans {0} secondes"},past:{one:"il y a {0} seconde",other:"il y a {0} secondes"}}},"second-short":{displayName:"s",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} s",other:"dans {0} s"},past:{one:"il y a {0} s",other:"il y a {0} s"}}}}},{locale:"fr-BE",parentLocale:"fr"},{locale:"fr-BF",parentLocale:"fr"},{locale:"fr-BI",parentLocale:"fr"},{locale:"fr-BJ",parentLocale:"fr"},{locale:"fr-BL",parentLocale:"fr"},{locale:"fr-CA",parentLocale:"fr",fields:{year:{displayName:"année",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"Dans {0} an",other:"Dans {0} ans"},past:{one:"Il y a {0} an",other:"Il y a {0} ans"}}},"year-short":{displayName:"a",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"dans {0} a",other:"dans {0} a"},past:{one:"il y a {0} a",other:"il y a {0} a"}}},month:{displayName:"mois",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} mois",other:"dans {0} mois"},past:{one:"il y a {0} mois",other:"il y a {0} mois"}}},"month-short":{displayName:"m.",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} m.",other:"dans {0} m."},past:{one:"il y a {0} m.",other:"il y a {0} m."}}},day:{displayName:"jour",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} jour",other:"dans {0} jours"},past:{one:"il y a {0} jour",other:"il y a {0} jours"}}},"day-short":{displayName:"j",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} j",other:"dans {0} j"},past:{one:"il y a {0} j",other:"il y a {0} j"}}},hour:{displayName:"heure",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} heure",other:"dans {0} heures"},past:{one:"il y a {0} heure",other:"il y a {0} heures"}}},"hour-short":{displayName:"h",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} h",other:"dans {0} h"},past:{one:"il y a {0} h",other:"il y a {0} h"}}},minute:{displayName:"minute",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} minute",other:"dans {0} minutes"},past:{one:"il y a {0} minute",other:"il y a {0} minutes"}}},"minute-short":{displayName:"min",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} min",other:"dans {0} min"},past:{one:"il y a {0} min",other:"il y a {0} min"}}},second:{displayName:"seconde",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} seconde",other:"dans {0} secondes"},past:{one:"il y a {0} seconde",other:"il y a {0} secondes"}}},"second-short":{displayName:"s",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} s",other:"dans {0} s"},past:{one:"il y a {0} s",other:"il y a {0} s"}}}}},{locale:"fr-CD",parentLocale:"fr"},{locale:"fr-CF",parentLocale:"fr"},{locale:"fr-CG",parentLocale:"fr"},{locale:"fr-CH",parentLocale:"fr"},{locale:"fr-CI",parentLocale:"fr"},{locale:"fr-CM",parentLocale:"fr"},{locale:"fr-DJ",parentLocale:"fr"},{locale:"fr-DZ",parentLocale:"fr"},{locale:"fr-GA",parentLocale:"fr"},{locale:"fr-GF",parentLocale:"fr"},{locale:"fr-GN",parentLocale:"fr"},{locale:"fr-GP",parentLocale:"fr"},{locale:"fr-GQ",parentLocale:"fr"},{locale:"fr-HT",parentLocale:"fr",fields:{year:{displayName:"année",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"dans {0} an",other:"dans {0} ans"},past:{one:"il y a {0} an",other:"il y a {0} ans"}}},"year-short":{displayName:"an",relative:{0:"cette année",1:"l’année prochaine","-1":"l’année dernière"},relativeTime:{future:{one:"dans {0} a",other:"dans {0} a"},past:{one:"il y a {0} a",other:"il y a {0} a"}}},month:{displayName:"mois",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} mois",other:"dans {0} mois"},past:{one:"il y a {0} mois",other:"il y a {0} mois"}}},"month-short":{displayName:"m.",relative:{0:"ce mois-ci",1:"le mois prochain","-1":"le mois dernier"},relativeTime:{future:{one:"dans {0} m.",other:"dans {0} m."},past:{one:"il y a {0} m.",other:"il y a {0} m."}}},day:{displayName:"jour",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} jour",other:"dans {0} jours"},past:{one:"il y a {0} jour",other:"il y a {0} jours"}}},"day-short":{displayName:"jr.",relative:{0:"aujourd’hui",1:"demain",2:"après-demain","-2":"avant-hier","-1":"hier"},relativeTime:{future:{one:"dans {0} j",other:"dans {0} j"},past:{one:"il y a {0} j",other:"il y a {0} j"}}},hour:{displayName:"heure",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} heure",other:"dans {0} heures"},past:{one:"il y a {0} heure",other:"il y a {0} heures"}}},"hour-short":{displayName:"hr",relative:{0:"cette heure-ci"},relativeTime:{future:{one:"dans {0} h",other:"dans {0} h"},past:{one:"il y a {0} h",other:"il y a {0} h"}}},minute:{displayName:"minute",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} minute",other:"dans {0} minutes"},past:{one:"il y a {0} minute",other:"il y a {0} minutes"}}},"minute-short":{displayName:"min.",relative:{0:"cette minute-ci"},relativeTime:{future:{one:"dans {0} min",other:"dans {0} min"},past:{one:"il y a {0} min",other:"il y a {0} min"}}},second:{displayName:"seconde",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} seconde",other:"dans {0} secondes"},past:{one:"il y a {0} seconde",other:"il y a {0} secondes"}}},"second-short":{displayName:"s",relative:{0:"maintenant"},relativeTime:{future:{one:"dans {0} s",other:"dans {0} s"},past:{one:"il y a {0} s",other:"il y a {0} s"}}}}},{locale:"fr-KM",parentLocale:"fr"},{locale:"fr-LU",parentLocale:"fr"},{locale:"fr-MA",parentLocale:"fr"},{locale:"fr-MC",parentLocale:"fr"},{locale:"fr-MF",parentLocale:"fr"},{locale:"fr-MG",parentLocale:"fr"},{locale:"fr-ML",parentLocale:"fr"},{locale:"fr-MQ",parentLocale:"fr"},{locale:"fr-MR",parentLocale:"fr"},{locale:"fr-MU",parentLocale:"fr"},{locale:"fr-NC",parentLocale:"fr"},{locale:"fr-NE",parentLocale:"fr"},{locale:"fr-PF",parentLocale:"fr"},{locale:"fr-PM",parentLocale:"fr"},{locale:"fr-RE",parentLocale:"fr"},{locale:"fr-RW",parentLocale:"fr"},{locale:"fr-SC",parentLocale:"fr"},{locale:"fr-SN",parentLocale:"fr"},{locale:"fr-SY",parentLocale:"fr"},{locale:"fr-TD",parentLocale:"fr"},{locale:"fr-TG",parentLocale:"fr"},{locale:"fr-TN",parentLocale:"fr"},{locale:"fr-VU",parentLocale:"fr"},{locale:"fr-WF",parentLocale:"fr"},{locale:"fr-YT",parentLocale:"fr"}]}()}}]);