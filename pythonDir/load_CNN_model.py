import tensorflow as tf
from keras_preprocessing.sequence import pad_sequences
import numpy as np
import pandas as pd
from env_list import STTResult_IN_PATH, DATA_IN_ABSOLUTE_PATH, PATH_DATA

# 경로 정의
DATA_CONFIGS = 'real_data_configs_38.json'
SAVE_WEIGHTS_FILE_NM = 'weights.h5'
INPUT2_TEST_DATA = 'STT_input_09.npy'

model = tf.keras.models.load_model(filepath= PATH_DATA + '/data_out/cnn_classifier_krmy_model.tf')
test_input2 = np.load(open(DATA_IN_ABSOLUTE_PATH + INPUT2_TEST_DATA, 'rb'))
test_input2 = pad_sequences(test_input2, maxlen=test_input2.shape[1])

results = model.predict(test_input2)
return_data = pd.read_csv(STTResult_IN_PATH + 'STTResult.csv', header=0)
return_data['results'] = results

return_data.to_csv(PATH_DATA + 'clova_result.csv', index=False)
