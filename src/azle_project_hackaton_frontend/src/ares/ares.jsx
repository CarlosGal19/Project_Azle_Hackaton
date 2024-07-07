import ares from '@bundly/ares-rest';

const aresInstance = ares.create({
    // baseURL: `${process.env.NEXT_PUBLIC_API_REST_URL}`,
    baseURL: 'http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943',
});

export default aresInstance;
