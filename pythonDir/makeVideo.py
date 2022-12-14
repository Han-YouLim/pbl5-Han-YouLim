import os
import pandas as pd
from moviepy.editor import *
import librosa
import soundfile as sf
import shutil
import ffmpeg
import subprocess as sp
from env_list import DATA_OUT_PATH, DATA_IN_PATH, PATH_DATA

# 경로 정의
INPUT_DATA = 'clova_result.csv'

test_data = pd.read_csv(PATH_DATA + 'clova_result.csv', header=0)
pred_df = pd.DataFrame({'sentence': test_data['sentence'], 'start': test_data['start'], 'end': test_data['end'],
                        'predict': test_data['results']})

start = []
end = []
result = []

for i in range(len(pred_df)):
    start.append(int(pred_df['start'][i] * 44.1))
    end.append(int(pred_df['end'][i] * 44.1))

    if pred_df['predict'][i] >= 0.7:
        result.append(1)
    else:
        result.append(0)


def make_quiet_wav(wav, result, start, end, output_name):
    quiet, _ = librosa.load(DATA_IN_PATH + 'quiet.wav', sr=44100)  # 무음 파일 로드
    data, _ = librosa.load(wav, sr=44100)  # 변환할 음성 파일 로드
    # data -> samplerate로 나누면 초(s) 단위

    length = len(result)  # 단위 개수
    lenq = len(quiet)  # 694575

    for i in range(0, length):
        tmp = int(end[i] - start[i])
        r = result[i]
        print("for문 : [{}] {} : {}".format(r, start[i] / 44100, end[i] / 44100))
        if (r == 1):
            if tmp > lenq:
                data[end[i] - lenq:end[i]] = quiet[:]
                print("quiet : {}:{}".format((end[i] - lenq) / 44100, end[i] / 44100))
            else:
                data[start[i]:end[i]] = quiet[:tmp] * 1.0
                print("quiet : {}:{}".format(start[i] / 44100, end[i] / 44100))
    sf.write(output_name, data, 44100)


def main():
    global targetloc
    global targetname
    if len(sys.argv) < 4:
        targetloc = sys.argv[1]
        targetname = sys.argv[2]

    targetname = targetname[:-4]
    print(targetname)
    video = targetloc

    data_output = DATA_OUT_PATH
    print('\nplease wait! \n')

    # 파일 복사하기 (사본 생성)
    shutil.copy2(video, data_output + "copied_" + targetname + ".mp4")
    print('\nMake copy of video ! \n')

    videoclip = VideoFileClip(data_output + "copied_" + targetname + ".mp4")
    audioclip = videoclip.audio
    audioclip.write_audiofile(data_output + "copy.wav")  # 음성 wav 추출하기
    print('\nChage mp4 to wav ! \n')

    make_quiet_wav(data_output + "copy.wav", result, start, end, data_output + "result_{}.wav".format(targetname))

    video = ffmpeg.input(data_output + "copied_" + targetname + ".mp4").video
    audio = ffmpeg.input(data_output + "result_{}.wav".format(targetname)).audio
    r = ffmpeg.output(video, audio, data_output + "result_{}.mp4".format(targetname),
                      vcodec='copy', acodec='aac', strict='experimental')
    ffmpeg.run(r)

    print('\nNow you can check!!! ')


if __name__ == '__main__':
    data_output = DATA_OUT_PATH
    try:
        if not os.path.exists(data_output):
            os.makedirs(data_output)
    except OSError:
        print('Error: Creating directory. ')
        quit()

    main()
    print('\nDone !!! \n')
