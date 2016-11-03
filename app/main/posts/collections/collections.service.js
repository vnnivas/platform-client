module.exports = CollectionsService;

CollectionsService.$inject = ['ModalService', '$rootScope'];
function CollectionsService(ModalService, $rootScope) {
	return {
		editCollection: editCollection,
		createCollection: createCollection
	};

	function showCollectionList() {
		ModalService.openTemplate('<collection-listing toggle-mode="false"></collection-listing>', 'app.collections', 'grid-three-up', false, false, false);
	}

	function showAddToCollection(posts) {
		// var scope = $rootScope.$new();
		// scope.collection = collection;

		// ModalService.openTemplate('<collection-listing></collection-listing>', 'app.edit_collection', 'grid-three-up', scope, false, false);
		// ModalService.openTemplate('<collection-listing toggle-mode="true" posts="posts"></collection-listing>', 'app.edit_collection', 'grid-three-up', scope, false, false);
	}

	function editCollection(collection) {
		var scope = $rootScope.$new();
		scope.collection = collection;

		ModalService.openTemplate('<collection-editor collection="collection"></collection-editor>', 'app.edit_collection', 'grid-three-up', scope, false, false);
	}

	function createCollection(posts) {
		var scope = $rootScope.$new();
		scope.posts = posts;

		ModalService.openTemplate('<collection-editor posts="posts"></collection-editor>', 'app.create_collection', 'grid-three-up', scope, false, false);
	}
}
