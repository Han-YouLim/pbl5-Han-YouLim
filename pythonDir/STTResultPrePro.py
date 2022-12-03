import numpy as np
import pandas as pd
import re
from konlpy.tag import Okt
from keras_preprocessing.sequence import pad_sequences
from keras_preprocessing.text import Tokenizer
from soynlp.normalizer import *

from env_list import STTResult_IN_PATH, DATA_IN_ABSOLUTE_PATH

test_data = pd.read_csv(STTResult_IN_PATH + 'STTResult.csv', header=0)
test_length = test_data['sentence'].astype(str).apply(len)


def cleanse(text):
    pattern = re.compile(r'\s+')
    text = re.sub(pattern, ' ', str(text))
    text = re.sub('[^가-힣ㄱ-ㅎㅏ-ㅣ0-9]', '', str(text))
    return text


def preprocessing(sentence, okt, remove_stopwords=False, stop_words=[]):
    sentence_text = repeat_normalize(sentence, num_repeats=2)
    wd_sentence = okt.morphs(sentence_text, stem=True)

    if remove_stopwords:
        wd_sentence = [token for token in wd_sentence if not token in stop_words]

    return wd_sentence


stop_words = ['은', '는', '이', '가', '하', '아', '것', '들', '의', '있', '되', '수', '보', '주', '등', '한']
okt = Okt()
test_data['sentence'] = test_data['sentence'].apply(cleanse)

clean_test_sentence = []

for review in test_data['sentence']:
    if type(review) == str:
        clean_test_sentence.append(preprocessing(review, okt, remove_stopwords=True, stop_words=stop_words))
    else:
        clean_test_sentence.append([])
clean_test_onlysentence_df = pd.DataFrame({'sentence': clean_test_sentence})

tokenizer = Tokenizer()

clean_train_data = pd.read_csv(STTResult_IN_PATH + 'real_train_38.csv')
clean_train_sentence = []
clean_train_sentence = clean_train_data['text']
array_text = []

for arr in clean_train_data['text']:
    array_text.append(eval(arr))

tokenizer.fit_on_texts(array_text)
test_sequences = tokenizer.texts_to_sequences(clean_test_sentence)

word_vocab = tokenizer.word_index
MAX_SEQUENCE_LENGTH = 38

test_inputs = pad_sequences(test_sequences, maxlen=MAX_SEQUENCE_LENGTH, padding='post')

TEST_INPUT_DATA = 'STT_input_09.npy'
TEST_CLEAN_DATA = 'STT_clean_09.csv'

np.save(open(DATA_IN_ABSOLUTE_PATH + TEST_INPUT_DATA, 'wb'), test_inputs)
clean_test_onlysentence_df.to_csv(DATA_IN_ABSOLUTE_PATH + TEST_CLEAN_DATA, index=False)
