
/**
 * @author <@sparradee> sparradee@gmail.com
 *
 * A generic all-purpose 'waiting' spinner component for Angular 1.5. Requires the parent element to have 'position: relative'
 * to allow the overlay to properly fit the element. 
 * 
 * CSS for the animations taken from .. somewhere.  @TODO: I need to re-locate the source and give attribution. 
 * 
 * @param boolean show True to display spinner, false to hide
 * @param string spinnerType One of 'rotate', 'bounce', 'rect', 'ellipsis' ; default is 'bounce'
 * @param string waitingText The message to display; defaults to "Please Wait..."
 *
 * @example <spinner show="true"></spinner>
 * @example <spinner show="loading()" spinner-type="ellipsis" waiting-text="Please Hold On..."></spinner>
 */
var spinnerObject = {
  bindings: {
    show: '<',        // Boolean - to display or hide the spinner
    spinnerType: '@', // String - one of 'rotate', 'bounce', 'rect', or 'ellipsis' (default: 'bounce')
    waitingText: '@', // String - the message to display (default: 'Please Wait...')
    message: '@'      // alias of waitingText
 },
 template: [
    '<div class="angular-spinner" ng-show="$ctrl.show">',
      '<div class="overlay"></div>',
      '<div class="spinner" ng-class="{\'no-text\': !$ctrl.waitingText}">',
        '<div class="rotate" ng-if="$ctrl.spinnerType === \'rotate\'"></div>',
        '<div class="bounce bounce1" ng-if="$ctrl.spinnerType === \'bounce\'"></div>',
        '<div class="bounce bounce2" ng-if="$ctrl.spinnerType === \'bounce\'"></div>',
        '<div class="rect rect1" ng-if="$ctrl.spinnerType === \'rect\'"></div>',
        '<div class="rect rect2" ng-if="$ctrl.spinnerType === \'rect\'"></div>',
        '<div class="rect rect3" ng-if="$ctrl.spinnerType === \'rect\'"></div>',
        '<div class="rect rect4" ng-if="$ctrl.spinnerType === \'rect\'"></div>',
        '<div class="rect rect5" ng-if="$ctrl.spinnerType === \'rect\'"></div>',
        '<div class="ellipsis ellipsis1" ng-if="$ctrl.spinnerType === \'ellipsis\'"></div>',
        '<div class="ellipsis ellipsis2" ng-if="$ctrl.spinnerType === \'ellipsis\'"></div>',
        '<div class="ellipsis ellipsis3" ng-if="$ctrl.spinnerType === \'ellipsis\'"></div>',
      '</div>',
      '<div class="waiting-text" ng-show="$ctrl.waitingText">',
        '<span ng-bind="$ctrl.waitingText"></span>',
      '</div>',
    '</div>'
  ].join(''),
  controller: function() {
    this.spinnerType = (this.spinnerType || 'bounce').toLowerCase();
    this.waitingText = this.waitingText || this.message || 'Please Wait...';
  }
};

angular.module('yourModuleName')
  .component('angularSpinner', spinnerObject)
  .component('spinner', spinnerObject)
;
  
