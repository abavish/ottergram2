import Component from '@ember/component';
//import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
	didRender: function () {
		window.$.fn.gridrotator.call(
			this.$("#ri-grid"),
			{
				rows : 5,
				columns : 7,
				maxStep : 2,
				interval : 2000,
				w1024 : {
					rows : 5,
					columns : 6
				},
				w768 : {
					rows : 5,
					columns : 5
				},
				w480 : {
					rows : 6,
					columns : 4
				},
				w320 : {
					rows : 7,
					columns : 4
				},
				w240 : {
					rows : 7,
					columns : 3
				},
			}
		);
	}
});
