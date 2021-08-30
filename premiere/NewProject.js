
var nameProject = "ProjectTest"

var directory = "C:\\Users\\Jonathan\\Desktop\\Premiere\\" + nameProject;

var clipsPath = "C:\\Users\\Jonathan\\Desktop\\Premiere\\Clips";

var musicPath = "C:\\Users\\Jonathan\\Desktop\\Premiere\\Musics";

app.setWorkspace("Editing");

closeProjectIfItExists();

var isProj = app.isDocument(directory);

openOrCreateNewProj();

var allClips = createBin("allClips");

var audios = createBin("audios");

importFiles(clipsPath, allClips);

importFiles(musicPath, audios);

alert("Project created!");



function closeProjectIfItExists() {
    
    if (app.isDocumentOpen()) {
        app.project.closeDocument(1, 0);
        $.write("[INFO] Current project closed!\n")
    }
}

function importFiles(filePaths, targetBin) {
    /**
     * importFiles(filePaths, supressUI, targetBin, importAsNumberedStills)
     * supressUI - Whether warning dialogs should be suppressed
     * importAsNumberedStills - Whether the file paths should be interpreted as a sequence of numbered stills
     */
    if (app.project.importFiles(filePaths, true, targetBin, false)) {
        $.write("[INFO] File(s) was imported in " + targetBin.name + "\n");
    } else {
        $.write("[ERRO] File(s) not imported\n");
    }
}

function createBin(name) {
    return app.project.rootItem.createBin(name);
}

function openOrCreateNewProj() {
    /**
     * verify if project exists, so open it, else create new project
     */
    if (isProj) {
        app.openDocument(directory);
        $.write("[INFO] Open document!\n");
    } else {
        app.newProject(directory);
        $.write("[INFO] Document created!\n");
    }
}
