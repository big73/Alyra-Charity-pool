use anchor_lang::prelude::*;

declare_id!("2RtYbTDjWJu1Uy8Kn9yZLjxs5ij8gKMDRsySJnHkBoKo");

#[program]
pub mod charity_pool {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
