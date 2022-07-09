<?php if (!empty($news) && is_array($news)) : ?>
    <div class="container">

        <div class="row">
            <?php foreach ($news as $news_item) : ?>
    
    
                <div class="col-sm-6 p-2" >
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"><?= esc($news_item['title']) ?></h5>
                            <p class="card-text"><?= esc($news_item['body']) ?></p>
                            <a href="news/<?= esc($news_item['slug'], 'url') ?>">View article</a>
                        </div>
                    </div>
                </div>
    
            <?php endforeach ?>
        </div>
    </div>
<?php else : ?>

    <h3>No News</h3>

    <p>Unable to find any news for you.</p>

<?php endif ?>