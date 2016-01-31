import {Component, View, NgZone} from 'angular2/core';

import {bootstrap} from 'angular2-meteor';

import {Parties} from 'collections/parties';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html'
})
class Socially {
	parties: Mongo.Cursor<Object>;

	constructor (zone: NgZone) {
		this.parties = Parties.find();
	}
}

bootstrap(Socially);
