//Designer Generator v 7.2.0 - SPR 2020-24 4/12/2020
var designerEvents = designerEvents || {};
designerEvents.api = designerEvents.api || {};
designerEvents.api.formfestivos = designerEvents.api.formfestivos || designer.dsgEvents();

function VC_FESTIVOSUQ_946174(cobisMainModule) {
    cobisMainModule.controllerProvider.register("VC_FESTIVOSUQ_946174_MAIN_CTRL", ["$scope", "breadcrumbs",

    function($scope, breadcrumbs) {
        $scope.breadcrumbs = breadcrumbs;
    }]);
    cobisMainModule.controllerProvider.register("VC_FESTIVOSUQ_946174_CTRL", ["cobisMessage", cobis.modules.CONTAINER + ".preferencesService", "dsgnrUtils", "designer", "$scope", "$location", "$document", "$parse", "$filter", "$modal", "$q", "$compile", "$timeout", "$translate",

    function(cobisMessage, preferencesService, dsgnrUtils, designer, $scope, $location, $document, $parse, $filter, $modal, $q, $compile, $timeout, $translate) {
        $scope.designer = designer;
        $scope.validatorOptions = validatorOptions;
        $scope.vc = designer.initViewContainer({
            moduleId: "INTRD",
            subModuleId: "FRMSP",
            taskId: "T_INTRDKMSGVNFM_174",
            taskVersion: "1.0.0",
            viewContainerId: "VC_FESTIVOSUQ_946174",
            hasCloseModalEvent: false,
            serverEvents: true
        },
            "${contextPath}/resources/INTRD/FRMSP/T_INTRDKMSGVNFM_174",
        designerEvents.api.formfestivos,
        $scope.rowData);
        $scope.kendo = kendo;
        //Lectura de Preferencias Visuales del Usuario, si no existen se aplican unas por default
        $scope.currencySymbol = kendo.cultures.current.numberFormat.currency.symbol;
        if (preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL)) {
            $scope.currencySymbol = preferencesService.getGlobalization(cobis.constant.CURRENCY_SYMBOL);
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT)) {
            $scope.dateFormat = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT);
        } else {
            $scope.dateFormat = 'yyyy/MM/dd';
        }
        if (preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER)) {
            $scope.dateFormatPlaceholder = preferencesService.getGlobalization(cobis.constant.DATE_FORMAT_PLACEHOLDER);
        } else {
            $scope.dateFormatPlaceholder = $scope.dateFormat;
        }
        $scope.vc.routeProvider = cobisMainModule.routeProvider;
        if (!$scope.vc.loaded) {
            var page = {
                hasTemporaryDataSupport: false,
                hasInitDataSupport: false,
                hasChangeInitDataSupport: false,
                hasSearchRenderEvent: false,
                ejecTemporaryData: false,
                ejecInitData: false,
                ejecChangeInitData: false,
                ejecSearchRenderEvent: false,
                hasTemporaryData: false,
                hasInitData: false,
                hasChangeInitData: false,
                hasCRUDSupport: false,
                vcName: 'VC_FESTIVOSUQ_946174'
            };
            if (typeof designer.constants.cobisPatterns !== 'undefined' && typeof designer.constants.cobisPatterns.formType !== 'undefined') {
                $scope.vc.cobisPattern = designer.constants.cobisPatterns.formType.NONE;
                $scope.vc.isConsolidateView = ($scope.vc.cobisPattern === designer.constants.cobisPatterns.formType.CONSOLIDATE_VIEW);
            } else {
                //CobisPattern no definido en framework de Designer como constante. Actualizar Framework
                $scope.vc.cobisPattern = 0;
                $scope.vc.isConsolidateView = false;
            }
            if (($scope.vc.isModal($scope) || $scope.isDesignerInclude || $scope.isDesignerDetail) && angular.isDefined($scope.queryParameters)) {
                $scope.vc.pk = $scope.queryParameters.pk;
                $scope.vc.mode = parseInt($scope.queryParameters.mode || designer.constants.mode.Insert);
            } else {
                $scope.vc.pk = $location.search().pk;
                $scope.vc.mode = parseInt($location.search().mode || designer.constants.mode.Insert);
            }
            $scope.vc.args.pk = $scope.vc.pk;
            $scope.vc.args.mode = $scope.vc.mode;
            if (cobis.userContext.getValue(cobis.constant.USER_NAME)) {
                $scope.vc.args.user = cobis.userContext.getValue(cobis.constant.USER_NAME);
            } else {
                $scope.vc.args.user = "UserOutContainer";
            }
            $scope.vc.customDialogParameters = $scope.customDialogParameters;
            $scope.vc.args.channel = $location.search().channel;
            $scope.vc.metadata = {
                taskPk: {
                    moduleId: 'INTRD',
                    subModuleId: 'FRMSP',
                    taskId: 'T_INTRDKMSGVNFM_174',
                    version: '1.0.0',
                    user: $scope.vc.args.user
                },
                entityNames: {
                    DiaFeriado: "DiaFeriado"
                },
                entities: {
                    DiaFeriado: {
                        ciudad: 'AT36_CIUDADBH405',
                        mes: 'AT57_MESHOLRT405',
                        dia: 'AT83_DIAJRQDM405',
                        anio: 'AT98_ANIORIHS405',
                        _pks: [],
                        _entityId: 'EN_DIAFERIAD_405',
                        _entityVersion: '1.0.0',
                        _transient: false
                    }
                },
                relations: []
            };
            $scope.vc.queryProperties = {};
            var defaultValues = {
                DiaFeriado: {}
            };
            $scope.vc.channelDefaultValues = function(entityName, attributeName, valueIfNotExist) {
                var channel = $scope.vc.args.channel;
                for (var en in defaultValues) {
                    if (defaultValues.hasOwnProperty(en) && en === entityName) {
                        for (var att in defaultValues[en]) {
                            if (defaultValues[en].hasOwnProperty(att) && att === attributeName) {
                                for (var ch in defaultValues[en][att]) {
                                    if (defaultValues[en][att].hasOwnProperty(ch) && ch === channel) {
                                        return defaultValues[en][att][ch];
                                    }
                                }
                            }
                        }
                    }
                }
                if (typeof valueIfNotExist !== "undefined") {
                    return valueIfNotExist;
                } else {
                    return null;
                }
            };
            $scope.vc.temporarySave = function() {
                var modelo = $scope.vc.cleanData($scope.vc.model);
                var data = {
                    model: modelo,
                    trackers: $scope.vc.trackers,
                    temporaryStorePK: $scope.vc.metadata.taskPk
                };
                $scope.vc.execute("temporarySave", VC_FESTIVOSUQ_946174, data, function() {});
            };
            $scope.vc.temporaryRead = function() {
                if (page.hasTemporaryDataSupport) {
                    var data = {
                        model: $scope.vc.model,
                        temporaryStorePK: $scope.vc.metadata.taskPk
                    };
                    return $scope.vc.executeService("readTemporaryData", VC_FESTIVOSUQ_946174, data).then(

                    function(response) {
                        var result = $scope.vc.processTemporaryResponse(response);
                        if (result) {
                            $scope.vc.execute("deleteTemporaryData", VC_FESTIVOSUQ_946174, data, function() {});
                            $scope.vc.crud.addTrackers($scope.vc.model);
                        }
                        page.hasTemporaryData = result;
                        page.ejecTemporaryData = response.success;
                        return page;
                    });
                } else {
                    page.ejecTemporaryData = false;
                    page.hasTemporaryData = false;
                    return page;
                }
            };
            $scope.vc.viewState.keyDown = function(e) {
                dsgnrUtils.container.validateOnEnter(e, $scope.vc);
            };
            $scope.vc.viewState.VC_FESTIVOSUQ_946174 = {
                style: []
            };
            $scope.vc.model.DiaFeriado = {
                ciudad: $scope.vc.channelDefaultValues("DiaFeriado", "ciudad"),
                mes: $scope.vc.channelDefaultValues("DiaFeriado", "mes"),
                dia: $scope.vc.channelDefaultValues("DiaFeriado", "dia"),
                anio: $scope.vc.channelDefaultValues("DiaFeriado", "anio")
            };
            //ViewState - Group: Group1131
            $scope.vc.createViewState({
                id: "G_FESTIVOSSS_373121",
                hasId: true,
                componentStyle: [],
                label: 'Group1131',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Entity: DiaFeriado, Attribute: dia
            $scope.vc.createViewState({
                id: "VA_DIAVXBWRZIGHRIP_437121",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_DAAQKWBFZ_12890",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: DiaFeriado, Attribute: dia
            $scope.$watch('vc.model.DiaFeriado.dia', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.DiaFeriado)) {
                        $scope.vc.tmpModel.DiaFeriado.dia = newValue;
                    } else {
                        $scope.vc.tmpModel.DiaFeriado = {
                            dia: newValue
                        };
                    }
                }
            });
            //ViewState - Entity: DiaFeriado, Attribute: mes
            $scope.vc.createViewState({
                id: "VA_MESSYHMRGYCOFZH_616121",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_MESIYFIVO_40098",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: DiaFeriado, Attribute: mes
            $scope.$watch('vc.model.DiaFeriado.mes', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.DiaFeriado)) {
                        $scope.vc.tmpModel.DiaFeriado.mes = newValue;
                    } else {
                        $scope.vc.tmpModel.DiaFeriado = {
                            mes: newValue
                        };
                    }
                }
            });
            //ViewState - Entity: DiaFeriado, Attribute: anio
            $scope.vc.createViewState({
                id: "VA_ANIOLVBVRRSKQZQ_754121",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_AOTHGEHJH_21485",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: DiaFeriado, Attribute: anio
            $scope.$watch('vc.model.DiaFeriado.anio', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.DiaFeriado)) {
                        $scope.vc.tmpModel.DiaFeriado.anio = newValue;
                    } else {
                        $scope.vc.tmpModel.DiaFeriado = {
                            anio: newValue
                        };
                    }
                }
            });
            //ViewState - Entity: DiaFeriado, Attribute: ciudad
            $scope.vc.createViewState({
                id: "VA_CIUDADZOXYHWTPT_607121",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_CDIGOCIDA_23807",
                format: "n0",
                decimals: 0,
                validationCode: 0,
                readOnly: designer.constants.mode.Query,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //watch tmpModel - Entity: DiaFeriado, Attribute: ciudad
            $scope.$watch('vc.model.DiaFeriado.ciudad', function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    if (angular.isDefined($scope.vc.tmpModel.DiaFeriado)) {
                        $scope.vc.tmpModel.DiaFeriado.ciudad = newValue;
                    } else {
                        $scope.vc.tmpModel.DiaFeriado = {
                            ciudad: newValue
                        };
                    }
                }
            });
            $scope.vc.createViewState({
                id: "VA_VABUTTONIXHHGDZ_257121",
                componentStyle: [],
                label: "INTRD.LBL_INTRD_REGISTRAR_30885",
                validationCode: 0,
                readOnly: designer.constants.mode.None,
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Accept
            $scope.vc.createViewState({
                id: "T_INTRDKMSGVNFM_174_ACCEPT",
                componentStyle: [],
                label: 'Accept',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            //ViewState - Command: Cancel
            $scope.vc.createViewState({
                id: "T_INTRDKMSGVNFM_174_CANCEL",
                componentStyle: [],
                label: 'Cancel',
                enabled: designer.constants.mode.All,
                visible: designer.constants.mode.All
            });
            if ($scope.vc.parentVc) {
                $scope.vc.afterOpenGridDialog();
            }
        }
        $scope.isInvalid = function(form, field) {
            if (!field) {
                return false;
            }
            var submitted = $scope.vc.submitted[form.$name];
            return ((submitted || field.$dirty) && field.$invalid);
        };
        $scope._initPage_CRUDExecuteQueryEntities = function(page) {
            if (!designer.enums.hasFlag(designer.constants.mode.Insert, $scope.vc.mode)) {
                if (page.hasTemporaryDataSupport && page.ejecTemporaryData && !page.hasTemporaryData) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else if (page.hasCRUDSupport) {
                    return $scope.vc.CRUDExecuteQueryEntities(page);
                } else {
                    return page;
                }
            } else {
                return page;
            }
        };
        $scope._initPage_InitializeTrackers = function(page) {
            $scope.vc.addChangeEvents($scope);
            $scope.vc.crud.addTrackers($scope.vc.model);
            return page;
        };
        $scope._initPage_ChangeInitData = function(page) {
            return $scope.vc.changeInitData(page, $scope.vc);
        };
        $scope._initPage_ProcessRender = function(page) {
            if (page.hasSearchRenderEvent) {
                $scope.vc.render('VC_FESTIVOSUQ_946174');
            }
            return page;
        };
        if ($scope.vc.isModal($scope) || $scope.vc.isDetailGrid($scope) || $scope.isDesignerInclude) {
            //para ventanas modales se usa ng-include con onload
            $scope.runLifeCycle = function() {
                var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                if (threadLifeCycle) {
                    if (!$scope.isDesignerInclude) {
                        cobis.showMessageWindow.loading(true, "none");
                    }
                    $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                    cobis.showMessageWindow.loading(false);
                }
            };
        } else {
            //con ngView no funciona el $document.ready se cambia por $viewContentLoaded
            $scope.$on('$viewContentLoaded', function() {
                if ($scope.vc.loaded) {
                    //Si se esta regresando de otra pantalla
                    $scope.vc.addAfterInitDataFlags($scope);
                    $scope.vc.addChangeEvents($scope);
                    if (($scope.vc.hasOnCloseModalEvent && angular.isDefined($scope.vc.dialogParameters.autoSync) && $scope.vc.dialogParameters.autoSync === false) && ($scope.vc.dialogResponse || $scope.vc.customDialogResponse)) {
                        $scope.vc.onCloseModalEvent();
                    }
                    if ($scope.vc.dialogResponse || $scope.vc.customDialogResponse) {
                        $scope.vc.afterCloseGridDialog();
                    }
                    cobis.showMessageWindow.loading(false);
                } else {
                    //Si es la primera vez que se ejecuta la pantalla
                    var threadLifeCycle = $scope.vc.lifeCycle.prepareThread(page);
                    if (threadLifeCycle) {
                        $scope.vc.lifeCycle.run(page, threadLifeCycle, $scope);
                        cobis.showMessageWindow.loading(false);
                    }
                }
            });
        }
    }]);
}
if (typeof cobisMainModule === "undefined") {
    var cobisMainModule = cobis.createModule("VC_FESTIVOSUQ_946174", ["ngResource", "ngRoute", "kendo.directives", "ui.bootstrap", "oc.lazyLoad", "pascalprecht.translate", cobis.modules.CONTAINER, "designerModule"], ["DSGNR", "INTRD"]);
    cobisMainModule.config(["$controllerProvider", "$compileProvider", "$filterProvider", "$locationProvider", "$routeProvider", "$provide", "$translateProvider", "$translatePartialLoaderProvider", "$ocLazyLoadProvider",

    function($controllerProvider, $compileProvider, $filterProvider, $locationProvider, $routeProvider, $provide, $translateProvider, $translatePartialLoaderProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            asyncLoader: $script
        });
        $locationProvider.html5Mode(true);
        cobisMainModule.controllerProvider = $controllerProvider;
        cobisMainModule.compileProvider = $compileProvider;
        cobisMainModule.routeProvider = $routeProvider;
        cobisMainModule.filterProvider = $filterProvider;
        cobisMainModule.provide = $provide;
        var culture = cobis.userContext.getValue(cobis.constant.CULTURE);
        $routeProvider.when("/VC_FESTIVOSUQ_946174", {
            templateUrl: "VC_FESTIVOSUQ_946174_FORM.html",
            controller: "VC_FESTIVOSUQ_946174_CTRL",
            label: "FormFestivos",
            resolve: {
                i18n: function($translatePartialLoader, $translate) {
                    cobis.showMessageWindow.customLoading(true);
                    $translatePartialLoader.addPart('DSGNR');
                    $translatePartialLoader.addPart('INTRD');
                    return $translate.use(cobis.userContext.getValue(cobis.constant.CULTURE)).then(function() {
                        return $translate.refresh().then(function() {
                            cobis.showMessageWindow.customLoading(false);
                        });
                    });
                }
            }
        }).otherwise({
            redirectTo: function(routeParams, path, search) {
                return "/VC_FESTIVOSUQ_946174?" + $.param(search);
            }
        });
        VC_FESTIVOSUQ_946174(cobisMainModule);
    }]);
} else {
    VC_FESTIVOSUQ_946174(cobisMainModule);
}