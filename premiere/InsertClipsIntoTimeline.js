
/**
 * array of clips with name, input and output
 */
var clipOrder = [ ["Clip 4", 1, 5], ["clip 1", 1, 3], ["clip 2", 1, 3], ["clip 3", 1, 3]];

var clipIn = 1;

var clipOut = 3;

app.setWorkspace("Editing");

var allClips = app.project.rootItem.children[0];

var audios = app.project.rootItem.children[1];

/**
 * createNewSequence(sequenceName, sequenceID)
 */
app.project.createNewSequence("Sequence 1", "0");

var clips = allClips.children[0].children;

var endTime = "0";

insertAllClips();

insertMusic();

app.project.sequences[0].audioTracks[0].setMute(1);

alert("Clips inserted into the timeline!");
$.write("[INFO] Clips inserted into the timeline!\n");



function insertMusic() {

    var music = audios.children[0].children[0];

    music.setOutPoint(endTime, 2);

    app.project.sequences[0].audioTracks[1]
        .insertClip(music, 0);

    $.write("[INFO] Audio " + music.name + " was added to the timeline!\n")
}

function insertAllClips() {
    /**
     * for each element in clipOrder verify if name is equal to clip name in clips
     */
    for (var i = 0; i < clipOrder.length; i++) {

        for (var j = 0; j < clips.length-1; j++) {
            /**
             * verify if clipOrder element is equal to clip element, so quit this for
             */
            if( clipOrder[i][0] == clips[j].name.split(".")[0] ){
                break;
            }
        }

        var currentClip = clips[j];

        /**
         * setOutPoint(time, mediaType)
         * mediaType: Integer
         * 1 = only video, 2 = only audio, 4 = both
         */
        var valueIn = clipOrder[i][1];
        var valueOut = clipOrder[i][2];

        currentClip.setInPoint(valueIn, 4);
        currentClip.setOutPoint(valueOut, 4);

        /**
         * insertClip( clip: projectItem, time: string )
         */
        app.project.sequences[0].videoTracks[0]
            .insertClip(currentClip, endTime);

        $.write("[INFO] Clip " + currentClip.name + " was added to the timeline\n");
        
        var clipTimeline = app.project.activeSequence.videoTracks[0].clips[i];
        endTime = clipTimeline.end;

    }
}
