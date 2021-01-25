import * as moment from 'moment';

export const DateForm = date => (date ? moment(date).format('DD/MM/YYYY') : '');
