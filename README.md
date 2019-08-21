# Sample Government of Canada AEM Forms Portal interface

![](https://github.com/jcharbon2008/AdobePortal/blob/master/GCPortal.JPG)


This project leverages Adobe AEM Forms to create a citizen facing user interface to provides online services.

The portal is built using Adobe recommended best practices and leverages Government of Canada approved technology and UX standards.

The portal includes the following:

* A set of AEM Sites WET compliant page templates and components that are using the latest [Adobe Core Components](https://docs.adobe.com/content/help/en/experience-manager-core-components/using/introduction.html). These WET compliant templates and components are used to build the informational part of the portal interface.

    * Based on [editable templates](https://helpx.adobe.com/ca/experience-manager/6-4/sites/developing/using/page-templates-editable.html)
    
* A set of AEM Forms WET compliant templatse and compoents. These components are used to create the data capture/wizard interface to capture end-user data

* Integration to GCKey/Secure Kye. This contains sample code and instructions to configure the integeration of GCKey/Secure Key for authentication to the portal

* Integration to GC Case. This provides a sample configuration to GC Case to allow the portal to read and write to Microsoft Dynamics.

### Requirements

The latest version of the archetype has the following requirements:

* Adobe Experience Manager 6.3.3.0 or higher
* Apache Maven (3.3.9 or newer)
* Adobe Public Maven Repository in maven settings, see [Knowledge Base](https://helpx.adobe.com/experience-manager/kb/SetUpTheAdobeMavenRepository.html) article for details.

For a list of supported AEM versions of previous archetype versions, see [historical supported AEM versions](VERSIONS.md).

## Building

To compile and use an edge, local version of this archetype:

    mvn clean install

Then change to the directory in which you want to create the project and run:

    mvn archetype:generate \
     -DarchetypeGroupId=com.adobe.granite.archetypes \
     -DarchetypeArtifactId=aem-project-archetype \
     -DarchetypeVersion=21-SNAPSHOT

Note: The profile "adobe-public" must be activated when using profiles like "autoInstallPackage" mentioned above.
