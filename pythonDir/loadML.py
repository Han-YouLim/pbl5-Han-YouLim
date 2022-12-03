import tensorflow as tf
from keras_preprocessing.sequence import pad_sequences
import numpy as np
import pandas as pd
from env_list import DATA_IN_RELATIVE_PATH, DATA_OUT_RELATIVE_PATH

# 모델 불러와서 적용
def load_model(npyfile, sttcsv):
    newmodel = tf.keras.models.load_model(DATA_OUT_RELATIVE_PATH+'cnn_classifier_kr_model')

    stt_test_input = np.load(open(DATA_IN_RELATIVE_PATH + npyfile, 'rb'))
    stt_test_input = pad_sequences(stt_test_input, maxlen=stt_test_input.shape[1])

    predict = newmodel.predict(stt_test_input)
    return_data = pd.read_csv(DATA_IN_RELATIVE_PATH + sttcsv)
    return_data['predict'] = predict # 데이터 프레임에 predict 열 추가
    return_data.to_csv(DATA_IN_RELATIVE_PATH + 'result_' + sttcsv, index=False)
    return 'result_' + sttcsv