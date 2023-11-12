import { auth } from "./auth/auth"
import { quiz } from './quiz/quiz';
import { profile } from './profile/profile';
import { certificates } from './profile/certificates';

export let api={
    ...auth,
    ...quiz,
    ...profile,
    ...certificates
}