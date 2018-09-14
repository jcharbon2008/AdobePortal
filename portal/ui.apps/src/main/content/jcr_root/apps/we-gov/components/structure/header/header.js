use(function () {
	'use strict';

	var resourcePage = pageManager.getContainingPage(resource);
	var resourceResolver = resource.getResourceResolver();
	var currentPath = "" + resourcePage.getPath();

	var currentLanguage = "" + currentPage.getLanguage().getLanguage();

	var afHome = "/content/forms/af/";
	var afMetadataHome = "/content/dam/formsanddocuments/";

	var servicesHomePage = currentPage.getAbsoluteParent(3);
	var govHomePage = currentPage.getAbsoluteParent(2);

	//Fix for adaptive form page rendition. AF doesn't have parent page, so creating current page as home page.
	if(servicesHomePage==null){

		servicesHomePage=currentPage;
	}
	var servicesHome = servicesHomePage != null ? servicesHomePage.getPath() : com.day.text.Text.getAbsoluteParent(currentPage.getPath(), 3);
	var govHome = govHomePage != null ? govHomePage.getPath() : com.day.text.Text.getAbsoluteParent(currentPage.getPath(), 2);

	var absParent = currentStyle.get("absParent", 2);

	//Fix for Naviagtion of adaptive form
	if(servicesHome.indexOf(afHome) !== -1)
	{
		servicesHome = getSiteRootForAF(servicesHome,afHome,resourceResolver);
		govHome = getSiteRootForAF(govHome,afHome,resourceResolver);
	}
	if(servicesHome.indexOf(afMetadataHome) !== -1)
	{
		servicesHome = getSiteRootForAF(servicesHome,afMetadataHome,resourceResolver);
		govHome = getSiteRootForAF(govHome,afMetadataHome,resourceResolver);
	}

	var siteTitle = resourceResolver.resolve(govHome).getParent().adaptTo(com.day.cq.wcm.api.Page).getTitle();

	return {
		title: siteTitle || currentPage.getTitle() || currentPage.getName(),
		homePath: "" + govHome,
		toggleLanguage: {
			name: currentLanguage === "en" ? "Français" : "English",
			code: currentLanguage === "en" ? "fr" : "en"
		}
	};

	function getSiteRootForAF(afPath, fixedPath, resourceResolver){
		//Setting default root page as We Gov Root page
		var siteRootPagePath = "/content/we-gov/en";
		var relativePath = afPath.replaceFirst(fixedPath,"");
		var pathElements = relativePath.split("/");

		if(pathElements.length > 1){
			//Adaptive form is contained within a folder
			var probableSiteRootPagePath = "/content/" + pathElements[0]+"/en";
			for (var i = 0; i<pathElements.length-2;i++){
				probableSiteRootPagePath = probableSiteRootPagePath+"/"+pathElements[i+1];

			}

			var resourceUtil = new org.apache.sling.api.resource.ResourceUtil();
			var isSiteRootPageExists = !resourceUtil.isNonExistingResource(resourceResolver.resolve(probableSiteRootPagePath));
			if(isSiteRootPageExists){
				//Site exists corresponding to adaptive form folder name. Making the specific site as site root page.
				siteRootPagePath = probableSiteRootPagePath;

			}
		}

		return siteRootPagePath;
	}

});