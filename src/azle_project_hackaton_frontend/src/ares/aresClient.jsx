import { Client, InternetIdentity } from '@bundly/ares-core';

const client = Client.create({
    restCanisters: {
        azle_project_hackaton_backend: {
            // baseUrl: process.env.REACT_APP_API_REST_URL
            baseUrl: 'http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943'
        }
    },
    providers: [
        new InternetIdentity({
            // providerUrl: process.env.REACT_APP_INTERNET_IDENTITY_URL
            providerUrl: 'http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943'
        })
    ]
});

export default client;
