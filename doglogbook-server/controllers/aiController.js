const askAI = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Placeholder for actual AI integration
    const response = `AI Response to: ${message}`;
    
    res.json({ response });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: 'AI processing failed' });
  }
};

module.exports = { askAI };
