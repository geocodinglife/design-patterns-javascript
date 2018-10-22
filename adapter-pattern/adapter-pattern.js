class MediaPlayer {
    constructor() {
        if (new.target === MediaPlayer) {
            throw new Error('本类不能实例化');
        }
    }
    play(audioType, fileName) { }
}

// ---- AdvancedMediaPlayer

class AdvancedMediaPlayer {
    constructor() {
        if (new.target === AdvancedMediaPlayer) {
            throw new Error('本类不能实例化');
        }
    }
    playVlc(fileName) { }
    playMp4(fileName) { }
}

class VlcPlayer extends AdvancedMediaPlayer {
    playVlc(fileName) {
        console.log(`Play vlc: ${fileName}`)
    }

    playMp4(fileName) {
        console.log(`Cannot play mp4`)
    }
}

class Mp4Player extends AdvancedMediaPlayer {
    playVlc(fileName) {
        console.log(`Cannot play vlc`)
    }

    playMp4(fileName) {
        console.log(`Play mp4: ${fileName}`)
    }
}

// ---- adapter
class MediaAdapter extends MediaPlayer {
    constructor(audioType) {
        super()
        if (audioType.toLowerCase() == 'vlc') {
            this.advancedMusicPlayer = new VlcPlayer()
        } else if (audioType.toLowerCase() == 'mp4') {
            this.advancedMusicPlayer = new Mp4Player()
        }
    }

    play(audioType, fileName) {
        if (audioType.toLowerCase() == 'vlc') {
            this.advancedMusicPlayer.playVlc(fileName)
        } else if (audioType.toLowerCase() == 'mp4') {
            this.advancedMusicPlayer.playMp4(fileName)
        }
    }
}

// ---- audio
class AudioPlayer extends MediaPlayer {
    constructor() {
        super()
        this.mediaAdapter = null
    }

    play(audioType, fileName) {
        if (audioType.toLowerCase() == 'mp3') {
            console.log(`Play mp3: ${fileName}`);
        } else if (audioType.toLowerCase() == 'vlc' || audioType.toLowerCase() == 'mp4') {
            this.mediaAdapter = new MediaAdapter(audioType)
            this.mediaAdapter.play(audioType, fileName);
        } else {
            console.log(`${audioType} is not support`)
        }
    }
}

let audioPlayer = new AudioPlayer()
audioPlayer.play('mp3', 'Reborn')
audioPlayer.play('mp4', 'Dark Soul')
audioPlayer.play('vlc', '哈哈')
audioPlayer.play('rmvb', '滴滴')