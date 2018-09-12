const newrelic = require('newrelic');

const MSSQL = 'MSSQL';

function instrumentTedious(shim, tedious, moduleName) {
	shim.setDatastore(MSSQL);

	const proto = tedious && tedious.Connection && tedious.Connection.prototype;
	if (proto) {
		shim.recordQuery(
			proto,
			'makeRequest',
			{ query: tediousRequestQuery, callback: tediousRequestCallback }
		);
	}
}

function tediousRequestQuery(shim, func, name, [request]) {
	return args.sqlTextOrProcedure;
}

function tediousRequestCallback(shim, opFunc, opName, segment, [request]) {
	request.callback = shim.bindSegment(request.callback, segment);
}

newrelic.instrumentDatastore('tedious', instrumentTedious);
