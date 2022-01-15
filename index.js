const newrelic = require('newrelic');

const MSSQL = 'MSSQL';

function tediousRequestQuery(shim, func, name, args) {
	const request = args[0];
	if (request.parametersByName && request.parametersByName.statement) {
		return request.parametersByName.statement.value;
	}
	return request.sqlTextOrProcedure;
}

function tediousRequestCallback(shim, opFunc, opName, segment, args) {
	const request = args[0];
	request.callback = shim.bindSegment(request.callback, segment, true);
}

function instrumentTedious(shim, tedious, _moduleName) {
	shim.setDatastore(MSSQL);

	const proto = tedious && tedious.Connection && tedious.Connection.prototype;
	if (proto) {
		shim.recordQuery(proto, 'makeRequest', {
			query: tediousRequestQuery,
			callback: tediousRequestCallback
		});

		shim.recordOperation(proto, [
			'beginTransaction',
			'commitTransaction',
			'rollbackTransaction',
			'saveTransaction',
			'transaction',
		], {
			callback: shim.FIRST
		});
	}
}

newrelic.instrumentDatastore('tedious', instrumentTedious);
