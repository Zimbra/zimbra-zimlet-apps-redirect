//Load components from Zimbra
import { route } from 'preact-router';

//Create function by Zimbra convention
export default function Zimlet(context) {
	//Get the 'plugins' object from context and define it in the current scope
	const { plugins } = context;
	const exports = {};

	exports.init = function init() {
		plugins.register("slot::routes", RouteCloudApps);

		function RouteCloudApps() {
			if(parent.window.location.pathname==='/modern/cloudapps')
			{
				route('/cloudapps/briefcase');
			}
		}
	};

	return exports;
}
