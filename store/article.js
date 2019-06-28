export const state = () => ({
  articles: {
    1: {
      title: 'テスト記事タイトル',
      releaseDate: '2019-06-18 00:00:00',
      category: ['categoryA', 'categoryD', 'categoryF'],
      contents:
        'テスト記事本文Aテスト記事本文Aテスト記事本文Aテスト記事本文Aテスト記事本文Aテスト記事本文A'
    },
    2: {
      title: 'テスト記事タイトル2',
      releaseDate: '2019-06-18 16:00:00',
      category: ['categoryB', 'categoryE', 'categoryF'],
      contents:
        'テスト記事本文Bテスト記事本文Bテスト記事本文Bテスト記事本文Bテスト記事本文Bテスト'
    },
    3: {
      title: 'テスト記事タイトル3',
      releaseDate: '2019-06-19 00:00:00',
      category: ['categoryC', 'categoryD', 'categoryE'],
      contents:
        'テスト記事本文Cテスト記事本文Cテスト記事本文Cテスト記事本文Cテスト記事本文Cテスト記事本文Cテスト記事本文Cテスト記事本文C'
    }
  }
})
