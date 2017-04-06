/**
 * Titanium Alternate Icons (Hyperloop)
 * @version 1.0.0
 * @author ccavazos
 */
var UIApplication = require('UIKit/UIApplication');
var UIDevice = require('UIKit/UIDevice');
var NSNumericSearch = require('Foundation').NSNumericSearch;
var NSOrderedAscending = require('Foundation').NSOrderedAscending;

exports.isSupported = function() {
    return UIDevice.currentDevice.systemVersion.compareOptions('10.3', NSNumericSearch) != NSOrderedAscending;
};

exports.supportsAlternateIcons = function() {
    return !!UIApplication.sharedApplication.supportsAlternateIcons;
};

exports.alternateIconName = function() {
	var iconName = String(UIApplication.sharedApplication.alternateIconName);
	if (iconName == 'null') {
		return null;
	} else {
		return iconName;	
	}
};

exports.setAlternateIconName = function(iconName) {
	UIApplication.sharedApplication.setAlternateIconNameCompletionHandler(iconName, function(error){
		if (error) {
			console.error('[ti.alternateicons] ', error);	
		} else {
			console.log('[ti.alternateicons] Icon has been changed to', (iconName) ? iconName : 'Default');
		}
	});
};

exports.setDefaultIconName = function() {
	exports.setAlternateIconName(null);
};