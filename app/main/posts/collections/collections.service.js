module.exports = CollectionsService;

CollectionsService.$inject = ['ModalService'];
function CollectionsService(ModalService) {
	return {
		editCollection: editCollection,
		createCollection: createCollection
	};

	function editCollection(collection) {
		var scope = $rootScope.$new();
		scope.collection = collection;

		ModalService.openTemplate('<collection-editor collection="collection"></collection-editor>', 'app.edit_collection', 'grid-three-up', $scope, false, false);
	}

	function createCollection() {
		ModalService.openTemplate('<collection-editor></collection-editor>', 'app.create_collection', 'grid-three-up', false, false, false);
	}
}
