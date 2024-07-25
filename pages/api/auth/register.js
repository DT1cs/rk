// pages/api/auth/register.js
import { supabase } from '../../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ user });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
