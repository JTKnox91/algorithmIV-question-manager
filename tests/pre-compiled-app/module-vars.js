
  var debug = aIV.debug({                  // $s$
    classTitle: 'appModule',
    openGroups: true
  });
  var debugHelp = aIV.debug('appHelpers'); // $e$
  var debugArgs, debugMsg, debugCheck;

  /**
   * -----------------------------------------------------
   * Public Variable (appHasBeenInitialized)
   * -----------------------------------------------------
   * @desc Indicates whether the app has been initialized.
   * @type {boolean}
   */
  var appHasBeenInitialized = false;

  /**
   * ----------------------------------------------- 
   * Public Variable (resources)
   * -----------------------------------------------
   * @desc The resources for the app.
   * @type {!Object}
   */
  var resources = {};

  /**
   * -----------------------------------------------
   * Public Variable (app)
   * -----------------------------------------------
   * @desc The app instance.
   * @type {!{
   *   
   *   
   * }}
   */
  var app = {};
