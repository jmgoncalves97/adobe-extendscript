
var effectComponent = "Lumetri Color";

$.write("[INFO] Enables Premiere Pro’s QE DOM! " + app.enableQE() + "\n");

var tracks = app.project.activeSequence.videoTracks;

var mainTrack = tracks[0];

/**
 * array of clips in timeline
 */
var clips = mainTrack.clips;

for (var i = 0; i < clips.length; i++) {
    
    /**
     * get clip of index i in timeline
     */
    var clip = qe.project.getActiveSequence()
        .getVideoTrackAt(0).getItemAt(i);

    /**
     * add video effect in clip of index i
     */
    clip.addVideoEffect(
        qe.project.getVideoEffectByName( effectComponent));

    $.write("[INFO] Effect " + effectComponent + " added to clip " + clip);

}

alert("Effect " + effectComponent + " added!");
$.write("[INFO] Effect " + effectComponent + " added!");