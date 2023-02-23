import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    // { duration: '10s', target: 500 },
    // { duration: '1m', target: 500 },
    // { duration: '10s', target: 600 },
    // { duration: '1m', target: 600 },
    // { duration: '10s', target: 700 },
    // { duration: '1m', target: 700 },
    // { duration: '10s', target: 800 },
    // { duration: '1m', target: 800 },
    // { duration: '10s', target: 900 },
    { duration: '1m', target: 900 },
    { duration: '10s', target: 1000 },
    // { duration: '1m', target: 1000 },
    // {duration: '5m', target: 1111},
    {duration: '1m', target: 1111}
  ],
  thresholds: {
    http_req_duration: [{ threshold: 'p(95) < 300', abortOnFail: false }],
    http_req_failed: [{ threshold: 'rate < 0.01', abortOnFail: false }],
  },
};
// this is what each virtual user will do repeatedly
export default () => {
  const product_id = Math.floor(Math.random() * (Math.floor(1000012) - Math.ceil(1)) + Math.ceil(1));
  http.get(`http://localhost:3005/api/reviews/meta/?product_id=${product_id}`); // makes a request to your endpoint
  sleep(1); // tells the vuser to sleep or think for 1 second before repeating again
};