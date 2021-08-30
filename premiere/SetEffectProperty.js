
var effectComponent = "Lumetri Color";

var effectProperty = "Contrast";

var value = 15;

$.write("[INFO] Enables Premiere Pro’s QE DOM! " + app.enableQE() + "\n");

var tracks = app.project.activeSequence.videoTracks;

var mainTrack = tracks[0];

/**
 * array of clips in timeline
 */
var clips = mainTrack.clips;

for (var i = 0; i < clips.length; i++) {

    var effects = clips[i].components;

    /**
     * for each effect in effects compare to effectComponent, if it is equal
     * compare each effect property to effectProperty, if it is equal set property value
     */
    for (var j = 0; j < effects.numItems; j++) {

        if (effects[j].displayName == effectComponent) {

            for (var p = 0; p < effects[j].properties.length; p++) {
                
                if (effects[j].properties[p].displayName == effectProperty) {
                    
                    effects[j].properties[p].setValue(value, true);
                }
            }
        }
    }
}

alert("Property " + effectProperty + " of " + effectComponent + " modified!");
$.write("[INFO] Property " + effectProperty + " of " + effectComponent + " modified!");