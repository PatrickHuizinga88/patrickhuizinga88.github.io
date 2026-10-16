import type {APIRoute} from 'astro';
import {llmsText} from '../data/site';

export const GET: APIRoute = () => new Response(llmsText(), {
  headers: {'Content-Type': 'text/plain; charset=utf-8'},
});
