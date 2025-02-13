(async () => {
    var versionText = document.getElementById("version-text");

    try {
        var response = await fetch('version.txt');
        if (!response.ok) throw new Error('Failed to fetch version file');

        var currentVersion = await response.text();
        versionText.textContent = "v" + currentVersion;
    } catch (error) {
        console.error('Error fetching version file:', error);
    }
})();